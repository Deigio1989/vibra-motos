import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// Configuração para build estático (file://)
export default defineConfig(({ mode }) => {
  const isStatic = mode === "static";

  return {
    plugins: [
      react(),
      ...(isStatic
        ? [
            legacy({
              targets: ["defaults", "not IE 11"],
            }),
          ]
        : []),
    ],
    build: {
      outDir: isStatic ? "dist-static" : "dist",
      rollupOptions: {
        input: {
          main: "./index.html",
        },
        output: {
          // Para build estático, usar formato IIFE (sem módulos)
          format: isStatic ? "iife" : "es",
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]",
          // Força um único bundle para compatibilidade
          manualChunks: isStatic ? undefined : {},
        },
      },
      // Para build estático, não usar módulos ES6
      target: isStatic ? "es2015" : "esnext",
      // Remove import.meta warnings
      define: isStatic
        ? {
            "import.meta": "{}",
            "process.env.NODE_ENV": '"production"',
          }
        : {},
    },
    base: "./",
  };
});
