import { useState, useEffect } from "react";

interface UseImageLoaderOptions {
  fadeInDuration?: number;
  delay?: number;
}

export const useImageLoader = (
  src: string,
  options: UseImageLoaderOptions = {}
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { fadeInDuration = 0.5, delay = 0 } = options;

  useEffect(() => {
    const img = new Image();

    const handleLoad = () => {
      if (delay > 0) {
        setTimeout(() => setIsLoaded(true), delay);
      } else {
        setIsLoaded(true);
      }
    };

    const handleError = () => {
      setIsError(true);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [src, delay]);

  const imageStyles = {
    opacity: isLoaded ? 1 : 0,
    transition: `opacity ${fadeInDuration}s ease-in-out`,
  };

  return {
    isLoaded,
    isError,
    imageStyles,
  };
};
