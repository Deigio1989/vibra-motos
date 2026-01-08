import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AtividadeContainer,
  ActivityCard,
  InstructionHeader,
  GameArea,
  LeftColumn,
  RightColumn,
  ConnectionRow,
  LeftDot,
  RightDot,
  SvgCanvas,
  ProgressBar,
  ProgressFill,
  ProgressText,
  BottomContainer,
} from "./styles";
import { NextButton } from "../../styles/ButtonStyles";
import { withPageLoader } from "../../hoc/withPageLoader";
import atividadeIcon from "../../assets/atividade.png";
import atividade11 from "../../assets/atividade-1-1.png";
import atividade12 from "../../assets/atividade-1-2.png";
import atividade13 from "../../assets/atividade-1-3.png";
import avancarIcon from "../../assets/avancar.png";

interface Connection {
  id: number;
  leftText: string;
  rightText: string;
  icon: string;
  connected: boolean;
}

const CONNECTIONS_DATA: Connection[] = [
  {
    id: 1,
    leftText: "Excesso de velocidade",
    rightText:
      "O uso correto reduz em até 70% o risco de morte em colisões (OMS).",
    icon: atividade11,
    connected: false,
  },
  {
    id: 2,
    leftText: "Falta de capacete",
    rightText: "Aumenta exponencialmente as chances de colisão lateral.",
    icon: atividade12,
    connected: false,
  },
  {
    id: 3,
    leftText: "Zigue-zague no corredor",
    rightText: "Responsável por boa parte dos acidentes graves.",
    icon: atividade13,
    connected: false,
  },
];

const Atividade1Base: React.FC = () => {
  // Embaralhar os itens da direita
  const [rightItems] = useState(() => {
    const items = [...CONNECTIONS_DATA];
    return items.sort(() => Math.random() - 0.5);
  });

  const [connections, setConnections] = useState(CONNECTIONS_DATA);
  const [activeConnection, setActiveConnection] = useState<number | null>(null);
  const [lines, setLines] = useState<{ from: number; to: number }[]>([]);
  const [errorDot, setErrorDot] = useState<number | null>(null);
  const navigate = useNavigate();
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalConnections = connections.length;
  const completedConnections = connections.filter((c) => c.connected).length;
  const progress = (completedConnections / totalConnections) * 100;
  const isCompleted = completedConnections === totalConnections;

  const handleLeftDotClick = (id: number) => {
    const conn = connections.find((c) => c.id === id);
    if (conn?.connected) return;

    setActiveConnection(id);
  };

  const handleRightDotClick = (id: number) => {
    if (activeConnection === null) return;

    // Verificar se a conexão está correta
    if (activeConnection === id) {
      // Correto! Conectar
      setConnections((prev) =>
        prev.map((conn) =>
          conn.id === id ? { ...conn, connected: true } : conn
        )
      );
      setLines((prev) => [...prev, { from: activeConnection, to: id }]);
      setActiveConnection(null);
    } else {
      // Errado! Piscar vermelho
      setErrorDot(id);
      setTimeout(() => {
        setErrorDot(null);
      }, 500);
    }
  };

  const handleAdvance = () => {
    if (isCompleted) {
      navigate("/retrovisor2"); // Ajustar para a rota correta
    }
  };

  const getLeftDotPosition = (index: number) => {
    const dot = leftRefs.current[index];
    if (!dot) return null;
    const rect = dot.getBoundingClientRect();
    const container = dot.closest(".game-area");
    if (!container) return null;
    const containerRect = container.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    };
  };

  const getRightDotPosition = (id: number) => {
    const index = rightItems.findIndex((item: Connection) => item.id === id);
    if (index === -1) return null;
    const dot = rightRefs.current[index];
    if (!dot) return null;
    const rect = dot.getBoundingClientRect();
    const container = dot.closest(".game-area");
    if (!container) return null;
    const containerRect = container.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    };
  };

  return (
    <AtividadeContainer>
      <ActivityCard>
        <InstructionHeader>
          <img src={atividadeIcon} className="atividade-title" alt="Avançar" />

          <p className="instruction-text">
            Ligue as infrações com suas <br /> informações correspondentes.
          </p>
          <p className="instruction-text-2">
            Clique em um ponto e <br /> ligue com outro ponto
          </p>
        </InstructionHeader>

        <GameArea className="game-area">
          <SvgCanvas>
            {lines.map((line, index) => {
              const leftIndex = connections.findIndex(
                (c) => c.id === line.from
              );
              const fromPos = getLeftDotPosition(leftIndex);
              const toPos = getRightDotPosition(line.to);
              if (!fromPos || !toPos) return null;
              return (
                <line
                  key={index}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke="#137b1a"
                  strokeWidth="5"
                />
              );
            })}
          </SvgCanvas>

          <LeftColumn>
            {connections.map((conn, index) => (
              <ConnectionRow key={conn.id}>
                <div className="text-content">
                  <span className="left-text">{conn.leftText}</span>
                </div>
                <img
                  src={conn.icon}
                  alt={conn.leftText}
                  className="activity-icon"
                />
                <LeftDot
                  ref={(el) => {
                    leftRefs.current[index] = el;
                  }}
                  $active={activeConnection === conn.id}
                  $connected={conn.connected}
                  onClick={() => handleLeftDotClick(conn.id)}
                />
              </ConnectionRow>
            ))}
          </LeftColumn>

          <RightColumn>
            {rightItems.map((conn, index) => {
              const connectionState = connections.find((c) => c.id === conn.id);
              return (
                <ConnectionRow key={conn.id} className="right-item">
                  <RightDot
                    ref={(el) => {
                      rightRefs.current[index] = el;
                    }}
                    $connected={connectionState?.connected || false}
                    $active={activeConnection !== null}
                    $error={errorDot === conn.id}
                    onClick={() => handleRightDotClick(conn.id)}
                  />
                  <div className="text-content">
                    <span className="right-text">{conn.rightText}</span>
                  </div>
                </ConnectionRow>
              );
            })}
          </RightColumn>
        </GameArea>
      </ActivityCard>

      {/* Barra de progresso e botão de avançar */}
      <BottomContainer>
        <ProgressBar $completed={isCompleted}>
          <ProgressFill $progress={progress}>
            <ProgressText $completed={isCompleted}>
              Conclua a atividade para avançar
            </ProgressText>
            <ProgressText $completed={isCompleted} className="completed">
              Conteúdo concluído! Você pode avançar.
            </ProgressText>
          </ProgressFill>
        </ProgressBar>
        <NextButton $canAdvance={isCompleted} onClick={handleAdvance}>
          <img src={avancarIcon} alt="Avançar" />
        </NextButton>
      </BottomContainer>
    </AtividadeContainer>
  );
};

const Atividade1 = withPageLoader(Atividade1Base, {
  imageSources: [
    atividadeIcon,
    atividade11,
    atividade12,
    atividade13,
    avancarIcon,
  ],
  minLoadingTime: 400,
  loadingText: "Carregando atividade...",
});

export default Atividade1;
