import React, { useState } from "react";
import { AnchorWrapper } from "./styles";
import { useNavigation } from "../../store/navigationStore";

interface AnchorProps {
  variant: "primary" | "secondary";
  position: number;
  iconSrc: string;
  isOpen?: boolean;
  startX: number;
  startY: number;
  spacing: number;
  yOffset: number;
  contentId: number; // ID do content que este anchor controla
  number: number; // Número do anchor (1, 2, 3, etc)
  title: string; // Título do anchor
}

const Anchor: React.FC<AnchorProps> = ({
  variant,
  position,
  iconSrc,
  isOpen = false,
  startX,
  startY,
  spacing,
  yOffset,
  contentId,
  number,
  title,
}) => {
  const x = startX + position * spacing;
  const y = variant === "primary" ? startY : startY + yOffset;

  const { activeContentId, setActiveContent } = useNavigation();

  // Estado local para hover (temporário)
  const [isHovering, setIsHovering] = useState(false);

  // Estado final: ativo OU hover (simples)
  const isActive = activeContentId === contentId;
  const isOpenState = isActive || isHovering;

  console.log(
    `Anchor ${contentId}: isActive=${isActive}, isHovering=${isHovering}, isOpenState=${isOpenState}`
  );

  // Handlers para hover (sempre funciona)
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Handler para clique no point (ativa permanentemente)
  const handlePointClick = () => {
    console.log(
      `Ativando content ${contentId}, ativo atual: ${activeContentId}`
    );
    setActiveContent(contentId);
  };
  return (
    <AnchorWrapper
      $variant={variant}
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div className={`line ${isOpenState ? "open" : ""}`}></div>
      <div
        className="point"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        onClick={handlePointClick}
      ></div>
      <div className={`text-box ${isOpenState ? "open" : ""}`}>
        <h3 className="number">{number}</h3>
        <p className="title">{title}</p>
      </div>
      <div className={`icon ${isOpenState ? "open" : ""}`}>
        <img src={iconSrc} alt={`icon ${position + 1}`} />
      </div>
    </AnchorWrapper>
  );
};

export default Anchor;
