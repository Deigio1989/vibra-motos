import React from "react";
import tarjaParadas from "../../assets/tarja-paradas.png";
import { PitstopTitleStyled } from "./styles";

interface PitstopTitleProps {
  title: string;
  iconSrc: string;
  iconAlt?: string;
}

const PitstopTitle: React.FC<PitstopTitleProps> = ({
  title,
  iconSrc,
  iconAlt = "",
}) => {
  return (
    <PitstopTitleStyled>
      <img className="tarja-paradas" src={tarjaParadas} alt="" />
      <img className="tarja-icon" src={iconSrc} alt={iconAlt} />
      <h3 className="title">{title}</h3>
    </PitstopTitleStyled>
  );
};

export default PitstopTitle;
