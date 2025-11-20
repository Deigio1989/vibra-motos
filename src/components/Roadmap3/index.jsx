import React from "react";
import roadmap from "../../assets/roadmap3.png";
import { Container } from "./styles";
import AnchorsContainer from "../AnchorsContainer";
import { PARADA3_ANCHORS } from "../../data/anchorsData";

export const Roadmap2 = () => {
  return (
    <Container>
      <img className="path" src={roadmap} alt="estrada" />
      <AnchorsContainer
        anchors={PARADA3_ANCHORS}
        startX={114}
        startY={218}
        spacing={110}
        yOffset={67}
      />
    </Container>
  );
};

export default Roadmap2;
