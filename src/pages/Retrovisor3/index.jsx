import React from "react";
import Retrovisor from "../../components/Retrovisor";
import retrovisorBack3 from "../../assets/retrovisor-back-3.png";

const Retrovisor3 = () => {
  const paragraphs = [
    "As técnicas de pilotagem são a diferença entre improvisar e estar preparado. Cada curva bem-feita, cada frenagem controlada e cada ultrapassagem consciente representam não apenas domínio da moto, mas também respeito à vida.",
    "Pilotar com técnica não é luxo, é sobrevivência. A moto responde ao piloto na mesma medida em que o piloto respeita seus limites.",
    "Ao final, a mensagem é clara: liberdade sobre duas rodas só faz sentido quando vem acompanhada de técnica, preparo e responsabilidade.",
  ];

  return (
    <Retrovisor
      imgSrc={retrovisorBack3}
      paragraphs={paragraphs}
      nextRoute="/quiz"
      nextButtonAlt="Ir para Quiz Final"
    />
  );
};

export default Retrovisor3;
