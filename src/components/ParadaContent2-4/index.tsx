import React from "react";
import { ContentWrapper, Text, Title, VideoSection } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-4.png";

interface ParadaContent2_4Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent2_4: React.FC<ParadaContent2_4Props> = ({
  number = "4",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Equipamentos: a <span>armadura</span> do piloto
          </h2>
        </div>
      </Title>
      <VideoSection>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoSection>
    </ContentWrapper>
  );
};

export default ParadaContent2_4;
