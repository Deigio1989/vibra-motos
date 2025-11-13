import React from "react";
import { AnchorsWrapper } from "./styles";
import Anchor from "../Anchor";

interface AnchorConfig {
  iconSrc: string;
  isOpen?: boolean;
}

interface AnchorsContainerProps {
  anchors: AnchorConfig[];
  startX?: number;
  startY?: number;
  spacing?: number;
  yOffset?: number;
}

const AnchorsContainer: React.FC<AnchorsContainerProps> = ({
  anchors,
  startX = 155.5,
  startY = 193.5,
  spacing = 133,
  yOffset = 80,
}) => {
  return (
    <AnchorsWrapper>
      {anchors.map((anchor, index) => (
        <Anchor
          key={index}
          variant={index % 2 === 0 ? "primary" : "secondary"}
          position={index}
          iconSrc={anchor.iconSrc}
          isOpen={anchor.isOpen || false}
          startX={startX}
          startY={startY}
          spacing={spacing}
          yOffset={yOffset}
          contentId={index + 1} // ID do content (1, 2, 3, 4, etc.)
        />
      ))}
    </AnchorsWrapper>
  );
};

export default AnchorsContainer;
