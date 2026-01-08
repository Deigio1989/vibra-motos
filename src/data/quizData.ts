import { QuizData } from "../types/quiz";

export const QUIZ_DATA: QuizData = {
  title: "VAMOS PRATICAR?",
  questions: [
    // Quiz 1 - 3 questões
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
    // Quiz 2 - 3 questões
    {
      id: 4,
      question:
        "De acordo com o conteúdo sobre condução defensiva, qual é o princípio básico para reduzir o risco de acidentes?",
      options: [
        { id: "a", text: "Evitar ultrapassagens em alta velocidade" },
        {
          id: "b",
          text: "Prever cenários adversos e manter distância de segurança",
        },
        { id: "c", text: "Andar sempre no limite de velocidade da via" },
        {
          id: "d",
          text: "Evitar qualquer contato visual com outros motoristas",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      question:
        "O que é recomendado para garantir que a moto esteja em condições de segurança?",
      options: [
        { id: "a", text: "Manter a moto o mais leve possível, sem acessórios" },
        {
          id: "b",
          text: "Realizar manutenção preventiva nos itens essenciais",
        },
        {
          id: "c",
          text: "Fazer manutenção apenas quando a moto apresentar problemas",
        },
        {
          id: "d",
          text: "Substituir as peças apenas quando houver desgaste visível",
        },
      ],
      correctAnswer: "b",
    },
    {
      id: 6,
      question:
        "Entre os equipamentos de segurança recomendados, qual deles pode reduzir a gravidade das lesões em braços e tronco em até 60%?",
      options: [
        { id: "a", text: "Capacete de última geração" },
        {
          id: "b",
          text: "Jaqueta com proteções nos ombros, coluna e cotovelos",
        },
        { id: "c", text: "Luvas reforçadas para maior aderência" },
        { id: "d", text: "Calças reforçadas para maior conforto" },
      ],
      correctAnswer: "b",
    },
    // Quiz 3 - 4 questões
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
