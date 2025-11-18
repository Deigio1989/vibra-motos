import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-2-3.png";

interface ParadaContent2_3Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent2_3: React.FC<ParadaContent2_3Props> = ({
  number = "3",

  paragraphs = [
    "Pneus: inspecione semanalmente. Sulcos gastos ou bolhas reduzem a aderência e aumentam o risco de derrapagens e aquaplanagem. Pneus carecas estão presentes em 1 a cada 5 acidentes em estradas brasileiras.",
    "Freios: as pastilhas devem ser verificadas a cada 1.000 km. O freio dianteiro responde por até 70% da força de parada. A falha desse sistema costuma ser fatal.",
    "Óleo e filtros: o óleo lubrifica e protege o motor. Trocas irregulares aumentam o risco de travamento. Em média, deve ser trocado a cada 2.000 a 3.000 km ou a cada 6 meses, conforme o fabricante.",
    "Corrente de transmissão: precisa estar tensionada e lubrificada. Uma corrente frouxa pode escapar, travar a roda e derrubar a moto em movimento.",
    'Luzes e retrovisores: fundamentais para "ver e ser visto". Qualquer falha elétrica cria zonas de invisibilidade, principalmente à noite.',
    "Bateria e parte elétrica: sinais de fraqueza não devem ser ignorados. Uma falha elétrica pode deixar o piloto vulnerável em locais perigosos. Manutenção não é gasto, é investimento em segurança.",
  ],
  imageSrc = paradaImage,
  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            <span>Moto em dia,</span>
          </h2>
          <h2 className="title">vida preservada</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <p className="chamada">
            Uma moto bem cuidada não é luxo: é ferramenta de sobrevivência. De
            acordo com a PRF, cerca de 20% dos acidentes com motos em rodovias
            federais envolvem falhas mecânicas simples, que poderiam ter sido
            evitadas com manutenção preventiva.
          </p>

          <Paragraphs>
            <b>Itens críticos a verificar regularmente:</b>
            {paragraphs.map((paragraph, index) => {
              // Detectar se o parágrafo começa com um título seguido de ":"
              const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

              if (titleMatch) {
                const [, title, content] = titleMatch;
                return (
                  <p key={index}>
                    <span className="paragraph-title">{title}</span> {content}
                  </p>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}
          </Paragraphs>
        </Text>
        <ContentImage className="content-image" src={imageSrc} alt={imageAlt} />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent2_3;
