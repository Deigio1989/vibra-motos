const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

async function createScormPackage() {
  const buildDir = path.join(__dirname, "../dist");
  const scormDir = path.join(__dirname, "../scorm-package");
  const zipPath = path.join(__dirname, "../vibra-motos-scorm.zip");

  try {
    // Limpa diretório anterior
    await fs.remove(scormDir);
    await fs.remove(zipPath);

    // Cria diretório do pacote SCORM
    await fs.ensureDir(scormDir);

    // Copia arquivos do build
    await fs.copy(buildDir, scormDir);

    // Copia o manifest do public
    const manifestSrc = path.join(__dirname, "../public/imsmanifest.xml");
    const manifestDest = path.join(scormDir, "imsmanifest.xml");
    await fs.copy(manifestSrc, manifestDest);

    // Atualiza o manifest com os arquivos reais
    let manifestContent = await fs.readFile(manifestDest, "utf8");

    // Lista arquivos na pasta assets
    const assetsDir = path.join(scormDir, "assets");
    if (await fs.exists(assetsDir)) {
      const assetFiles = await fs.readdir(assetsDir);
      const fileEntries = assetFiles
        .map((file) => `      <file href="assets/${file}"/>`)
        .join("\n");

      // Substitui os arquivos no manifest
      manifestContent = manifestContent.replace(
        /<file href="assets\/main\.js"\/>\s*<file href="assets\/index\.css"\/>/,
        fileEntries
      );
    }

    await fs.writeFile(manifestDest, manifestContent);

    // Cria o arquivo ZIP
    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    output.on("close", () => {
      console.log(`✅ Pacote SCORM criado: ${zipPath}`);
      console.log(`📦 Tamanho: ${archive.pointer()} bytes`);
      console.log(`\n🚀 Para testar:`);
      console.log(`1. Faça upload do arquivo vibra-motos-scorm.zip no seu LMS`);
      console.log(`2. Ou teste em: https://cloud.scorm.com/`);
    });

    archive.on("error", (err) => {
      throw err;
    });

    archive.pipe(output);
    archive.directory(scormDir, false);
    archive.finalize();
  } catch (error) {
    console.error("❌ Erro ao criar pacote SCORM:", error);
    process.exit(1);
  }
}

createScormPackage();
