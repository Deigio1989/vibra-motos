import React from "react";
import styled from "styled-components";
import { useImageLoader } from "../../hooks/useImageLoader";

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledImage = styled.img<{ $isLoaded: boolean }>`
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const PlaceholderDiv = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "200px")};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fadeInDuration?: number;
  delay?: number;
  showPlaceholder?: boolean;
  placeholderWidth?: number;
  placeholderHeight?: number;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  src,
  alt,
  fadeInDuration = 0.5,
  delay = 0,
  showPlaceholder = false,
  placeholderWidth,
  placeholderHeight,
  className,
  style,
  ...props
}) => {
  const { isLoaded, isError } = useImageLoader(src, { fadeInDuration, delay });

  if (isError) {
    return showPlaceholder ? (
      <PlaceholderDiv
        width={placeholderWidth}
        height={placeholderHeight}
        className={className}
        style={style}
      />
    ) : null;
  }

  return (
    <ImageContainer className={className} style={style}>
      {showPlaceholder && !isLoaded && (
        <PlaceholderDiv width={placeholderWidth} height={placeholderHeight} />
      )}
      <StyledImage
        {...props}
        src={src}
        alt={alt}
        $isLoaded={isLoaded}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: `opacity ${fadeInDuration}s ease-in-out`,
          display: showPlaceholder && !isLoaded ? "none" : undefined,
        }}
      />
    </ImageContainer>
  );
};

export default FadeInImage;
