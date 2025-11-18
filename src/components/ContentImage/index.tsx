import React from "react";
import styled from "styled-components";

interface ContentImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down" | "none";
  className?: string;
  margin?: string;
  borderRadius?: string;
}

const StyledImage = styled.img<ContentImageProps>`
  width: ${(props) => props.width || "55%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "contain"};
  margin: ${(props) => props.margin || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  max-width: 100%;
  display: block;
`;

const ContentImage: React.FC<ContentImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
  margin,
  borderRadius,
  ...props
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
      className={className}
      margin={margin}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

// Variantes pré-definidas para facilitar o uso
export const ContentImageVariant1 = styled(ContentImage)`
  width: 55%;
`;

export const ContentImageVariant2 = styled(ContentImage)`
  width: 100%;
  margin: 2rem 0;
`;

export const ContentImageVariant3 = styled(ContentImage)`
  width: 45%;
  margin-right: 2rem;
`;

export const ContentImageVariant4 = styled(ContentImage)`
  width: 35%;
  object-fit: contain;
`;

export const ContentImageVariant5 = styled(ContentImage)`
  width: 35%;
  margin-left: 1rem;
`;

export const ContentImageVariant6 = styled(ContentImage)`
  width: 100%;
  margin: 1rem 0;
`;

export default ContentImage;
