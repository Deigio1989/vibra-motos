import { QuizData } from "../types/quiz";

export const QUIZ1_DATA: QuizData = {
  title: "VAMOS PRATICAR?",
  questions: [
    {
      id: 1,
      question:
        "Quais comportamentos são mais frequentemente associados a acidentes envolvendo motociclistas?",
      options: [
        { id: "a", text: "Excesso de velocidade e uso de celular" },
        { id: "b", text: "Ultrapassagens seguidas e cansaço" },
        { id: "c", text: "Excesso de confiança e imprudência" },
        { id: "d", text: "Falta de sinalização e condições ruins de pista" },
      ],
      correctAnswer: "c",
    },
    {
      id: 2,
      question:
        "O que a legislação brasileira diz sobre o uso do corredor entre veículos?",
      options: [
        { id: "a", text: "O corredor é proibido em todas as circunstâncias" },
        { id: "b", text: "O uso do corredor é permitido, mas exige cautela" },
        { id: "c", text: "Só pode ser utilizado se houver faixas delimitadas" },
        {
          id: "d",
          text: "O corredor só pode ser usado em cidades de grande porte",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question:
        "Qual infração é considerada uma das mais perigosas no trânsito para motociclistas?",
      options: [
        { id: "a", text: "Excesso de velocidade" },
        { id: "b", text: "Não usar capacete" },
        { id: "c", text: "Usar celular enquanto pilota" },
        { id: "d", text: "Rodar sem iluminação em vias urbanas" },
      ],
      correctAnswer: "b",
    },
  ],
};
