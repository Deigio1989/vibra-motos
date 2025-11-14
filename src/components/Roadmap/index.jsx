import React from "react";
import roadmap from "../../assets/roadmap.png";
import { Container } from "./styles";
import AnchorsContainer from "../AnchorsContainer";
import { PARADA1_ANCHORS } from "../../data/anchorsData";

export const Roadmap = () => {
  return (
    <Container>
      <img className="path" src={roadmap} alt="estrada" />
      <AnchorsContainer
        anchors={PARADA1_ANCHORS}
        startX={143}
        startY={220}
        spacing={137.75}
        yOffset={80}
      />
    </Container>
  );
};

export default Roadmap;
