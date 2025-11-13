# 🏍️ Vibra Motos - Projeto SCORM com Vite + React

Este é um projeto de treinamento SCORM configurado com **Vite**, **React** e **scorm-again** (biblioteca SCORM moderna).

## 🚀 **Abordagem Utilizada**

### ✅ **Biblioteca Recomendada: `scorm-again`**

- ✅ Biblioteca SCORM mais moderna e atualizada (26.337 downloads/semana)
- ✅ Suporte para AICC, SCORM 1.2 e SCORM 2004
- ✅ Ativa manutenção e comunidade
- ✅ TypeScript friendly

### ✅ **Configuração Otimizada para Vite**

- ✅ Build configurado para SCORM (paths relativos)
- ✅ Arquivos com nomes consistentes
- ✅ Manifest SCORM 1.2 incluído
- ✅ Script automático para criação de pacotes

## 📁 **Estrutura do Projeto**

```
src/
├── services/
│   └── scormService.js     # Service principal do SCORM
├── hooks/
│   └── useScorm.js         # Hook React para SCORM
├── App.jsx                 # Exemplo de curso SCORM
└── ...

public/
└── imsmanifest.xml        # Manifest SCORM

scripts/
└── create-scorm-package.js # Script para criar pacote
```

## 🛠️ **Comandos Disponíveis**

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Criar pacote SCORM completo
npm run build:scorm

# Preview do build
npm run preview
```

## 🎯 **Como Usar**

### 1. **Desenvolvimento**

```bash
npm run dev
```

- Funciona em modo **desenvolvimento sem LMS**
- Simula dados SCORM para teste
- Hot reload habilitado

### 2. **Criar Pacote SCORM**

```bash
npm run build:scorm
```

- Gera `vibra-motos-scorm.zip`
- Pronto para upload no LMS
- Inclui todos os arquivos necessários

### 3. **Testar SCORM**

- **SCORM Cloud**: https://cloud.scorm.com/
- **Moodle local**: Faça upload do ZIP
- **Qualquer LMS**: Compatível com SCORM 1.2

## 🧩 **Como Implementar seu Próprio Curso**

### **1. Usando o Hook useScorm**

```jsx
import useScorm from "./hooks/useScorm";

function MeuCurso() {
  const {
    isInitialized,
    lessonStatus,
    studentName,
    score,
    updateScore,
    saveProgress,
    loadProgress,
    passCourse,
    failCourse,
  } = useScorm();

  // Sua lógica aqui...
}
```

### **2. Principais Métodos**

```jsx
// Salvar progresso
saveProgress({ step: 5, answers: [1, 2, 3] });

// Carregar progresso salvo
const data = loadProgress();

// Atualizar pontuação
updateScore(85); // 85%

// Finalizar curso
passCourse(85); // Aprovado com 85%
failCourse(45); // Reprovado com 45%
```

### **3. Usando Diretamente o Service**

```jsx
import scormService from "./services/scormService";

// Acesso direto à API SCORM
scormService.set("cmi.core.lesson_status", "completed");
scormService.commit();
```

## 🔧 **Configurações SCORM**

### **Manifest (imsmanifest.xml)**

- ✅ SCORM 1.2 configurado
- ✅ Tempo máximo: 2 horas
- ✅ Nota mínima: 80%
- ✅ Configuração de arquivos automática

### **Vite Config**

- ✅ Base path relativo (`./`)
- ✅ Nomes de arquivos consistentes
- ✅ Otimizado para LMS

## 🧪 **Para Testes**

### **Desenvolvimento Local**

- SCORM funciona em modo simulação
- Dados fake para `student_name`, etc.
- Console logs para debug

### **SCORM Cloud (Recomendado)**

1. Acesse https://cloud.scorm.com/
2. Crie conta gratuita
3. Faça upload do ZIP
4. Teste funcionalidades completas

### **Moodle Local**

1. Configure Moodle localmente
2. Ative módulo SCORM
3. Faça upload do pacote
4. Teste como aluno

## 📚 **Documentação das Bibliotecas**

- **scorm-again**: https://www.npmjs.com/package/scorm-again
- **Vite**: https://vitejs.dev/
- **React**: https://react.dev/

## 🔍 **Debug e Troubleshooting**

### **Console Logs**

O projeto inclui logs detalhados:

```
✅ SCORM inicializado com sucesso
⚠️ SCORM não disponível (modo desenvolvimento)
❌ Erro ao inicializar SCORM: [erro]
```

### **Problemas Comuns**

1. **CORS**: Configure LMS corretamente
2. **Manifest**: Verifique arquivos listados
3. **Paths**: Use sempre paths relativos
4. **LMS**: Teste em diferentes LMS

## 🎉 **Pronto para Produção!**

Este setup está pronto para produção com:

- ✅ Biblioteca SCORM confiável e moderna
- ✅ Configuração otimizada para Vite
- ✅ Compatibilidade com principais LMS
- ✅ Scripts automatizados
- ✅ Modo desenvolvimento funcional

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
