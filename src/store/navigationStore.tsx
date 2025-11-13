import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationState {
  activeContentId: number | null;
  setActiveContent: (id: number) => void;
}

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeContentId, setActiveContentId] = useState<number | null>(1); // Começa com o primeiro ativo

  console.log("NavigationProvider - activeContentId:", activeContentId);

  const setActiveContent = (id: number) => {
    console.log(`Mudando activeContentId de ${activeContentId} para ${id}`);
    setActiveContentId(id);
  };

  return (
    <NavigationContext.Provider value={{ activeContentId, setActiveContent }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
