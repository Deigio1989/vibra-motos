import { QuizData } from "../types/quiz";

export const QUIZ3_DATA: QuizData = {
  title: "VAMOS PRATICAR?",
  questions: [
    {
      id: 1,
      question:
        "Qual é o principal risco associado ao ponto cego dos veículos?",
      options: [
        { id: "a", text: "O motociclista não consegue ver outros veículos" },
        {
          id: "b",
          text: "Os motoristas dos veículos pesados não conseguem ver o motociclista",
        },
        {
          id: "c",
          text: "O motociclista se desvia involuntariamente para a faixa dos outros veículos",
        },
        {
          id: "d",
          text: "A visibilidade do trânsito melhora, mas com riscos a mais",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Qual é a recomendação para evitar riscos ao fazer curvas?",
      options: [
        {
          id: "a",
          text: "Acelerar com mais intensidade para controlar a moto",
        },
        { id: "b", text: "Entrar na curva sem reduzir a velocidade" },
        {
          id: "c",
          text: "Reduzir a velocidade antes da curva e manter a aceleração constante",
        },
        {
          id: "d",
          text: "Virar o corpo para o lado oposto da curva para maior estabilidade",
        },
      ],
      correctAnswer: "c",
    },
    {
      id: 3,
      question:
        "Qual a importância de uma postura correta ao pilotar uma moto?",
      options: [
        { id: "a", text: "Aumenta a agilidade do piloto" },
        { id: "b", text: "Reduz a fadiga e melhora o controle da moto" },
        { id: "c", text: "Diminui o impacto da aceleração nos músculos" },
        {
          id: "d",
          text: "Permite que o piloto pilote sem usar equipamentos de proteção",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      question:
        "De acordo com as dicas do dia a dia, qual é uma boa prática para aumentar a segurança?",
      options: [
        { id: "a", text: "Usar a moto sempre nas mesmas rotas" },
        {
          id: "b",
          text: "Usar roupas visíveis para aumentar a percepção dos motoristas",
        },
        {
          id: "c",
          text: "Acelerar nas ruas movimentadas para evitar acidentes",
        },
        {
          id: "d",
          text: "Usar fones de ouvido enquanto pilota para maior concentração",
        },
      ],
      correctAnswer: "b",
    },
  ],
};
