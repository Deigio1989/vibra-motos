import { useState, useEffect } from "react";

interface UsePageLoaderOptions {
  imageSources?: string[];
  minLoadingTime?: number; // Tempo mínimo em ms para evitar flash
}

/**
 * Hook personalizado para garantir que todos os recursos da página estejam carregados
 * antes de exibir o conteúdo, evitando problemas de animação e transição.
 */
export const usePageLoader = (options: UsePageLoaderOptions = {}) => {
  const { imageSources = [], minLoadingTime = 500 } = options;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let mounted = true;

    const loadResources = async () => {
      try {
        // Aguarda o DOM estar completamente carregado
        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });
        }

        // Pré-carrega todas as imagens especificadas
        if (imageSources.length > 0) {
          await Promise.all(
            imageSources.map(
              (src) =>
                new Promise<void>((resolve, reject) => {
                  const img = new Image();
                  img.onload = () => resolve();
                  img.onerror = () =>
                    reject(new Error(`Failed to load image: ${src}`));
                  img.src = src;
                })
            )
          );
        }

        // Garante tempo mínimo de loading para evitar flash
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minLoadingTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minLoadingTime - elapsedTime)
          );
        }

        // Pequeno delay adicional para garantir que scripts e estilos estejam aplicados
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (mounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading resources:", error);
        // Mesmo com erro, remove o loading após o tempo mínimo
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [imageSources, minLoadingTime]);

  return { isLoading };
};
