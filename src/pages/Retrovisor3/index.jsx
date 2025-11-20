import React from "react";
import Retrovisor from "../../components/Retrovisor";
import ModularIntro from "../../components/ModularIntro";
import retrovisorBack3 from "../../assets/retrovisor-back-3.png";
import { RETROVISOR3_INTRO_DATA } from "../../data/retrovisor3IntroData";

const Retrovisor3 = () => {
  return (
    <>
      <Retrovisor
        imgSrc={retrovisorBack3}
        paragraphs={[]}
        nextRoute="/quiz3"
        nextButtonAlt="Ir para Quiz 3"
      />
    </>
  );
};

export default Retrovisor3;
