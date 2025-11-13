import React from "react";
import roadmap from "../../assets/roadmap.png";
import { Container } from "./styles";
import AnchorsContainer from "../AnchorsContainer";
import icon1 from "../../assets/icon-1.png";

export const Roadmap = () => {
  // Configuração dos anchors
  const anchorsConfig = [
    { iconSrc: icon1, isOpen: true },
    { iconSrc: icon1, isOpen: false },
    { iconSrc: icon1, isOpen: false },
    { iconSrc: icon1, isOpen: false },
    { iconSrc: icon1, isOpen: false },
    { iconSrc: icon1, isOpen: false },
    { iconSrc: icon1, isOpen: false },
  ];

  return (
    <Container>
      <img className="path" src={roadmap} alt="estrada" />
      <AnchorsContainer
        anchors={anchorsConfig}
        startX={143}
        startY={220}
        spacing={137.75}
        yOffset={80}
      />
    </Container>
  );
};

export default Roadmap;
