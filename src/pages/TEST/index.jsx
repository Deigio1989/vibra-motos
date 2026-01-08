import React from "react";
import { useNavigate } from "react-router-dom";
import { ParadaContainer } from "../../styles/ParadaContentStyles";
import { NextButton } from "../../styles/ButtonStyles";
import PitstopTitle from "../../components/PitstopTitle";
import ParadaContent2_1 from "../../components/ParadaContent2-1";
import ParadaContent2_5from "../../components/ParadaContent2-2";
import ParadaContent2_3 from "../../components/ParadaContent2-3";
import ParadaContent2_4 from "../../components/ParadaContent2-4";
import ParadaContent2_5 from "../../components/ParadaContent2-5";
import ParadaContent2_6 from "../../components/ParadaContent2-6";

import Roadmap from "../../components/Roadmap2";
import ModularIntro from "../../components/ModularIntro";
import { PARADA2_INTRO_DATA } from "../../data/parada2IntroData";

import { NavigationProvider } from "../../store/navigationStore";

import ContentAnimation from "../../components/ContentAnimation";

import Timer from "../../components/Timer";
import ParadaContent1_5 from "../../components/ParadaContent1-5";
import Atividade1 from "../Atividade1";

// Aplicar loading screen com pré-carregamento de imagens
const Test = () => {
  return (
    <Atividade1></Atividade1>
  );
};

export default Test;
