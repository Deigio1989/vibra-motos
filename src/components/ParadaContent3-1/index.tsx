import React from "react";
import { ContentWrapper, Text, Title, VideoSection } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-4.png";

interface ParadaContent3_1Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent3_1: React.FC<ParadaContent3_1Props> = ({
  number = "1",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Ponto cego: o <span>inimigo invisível</span>
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

export default ParadaContent3_1;
