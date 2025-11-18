# Sistema Modular de Estilos para ParadaContent

## Visão Geral

O novo sistema modular permite maior flexibilidade e reutilização de estilos, eliminando duplicações e facilitando manutenção.

## Componentes Principais

### 1. Layouts Base

```typescript
import {
  BaseLayout,
  ColumnLayout,
  FlexLayout,
  CenteredLayout,
} from "../../styles/ModularParadaStyles";

// Layout horizontal básico (texto + imagem lado a lado)
const ContentWrapper = styled(BaseLayout)``;

// Layout em coluna (título, texto, imagem verticalmente)
const ContentWrapper = styled(ColumnLayout)`
  margin-left: 5rem; // customizável via props
`;

// Layout flexível (controle total via props)
const ContentWrapper = styled(FlexLayout)`
  margin: 0 4rem; // customizável via props
`;
```

### 2. ContentImage Modular

```typescript
import ContentImage from "../ContentImage";

// Uso básico
<ContentImage src={imageSrc} alt={imageAlt} />

// Com props customizadas
<ContentImage
  src={imageSrc}
  alt={imageAlt}
  width="80%"          // largura customizada
  height="300px"       // altura específica
  objectFit="cover"    // tipo de ajuste
  margin="2rem 0"      // margens
  borderRadius="8px"   // bordas arredondadas
/>

// Variantes pré-definidas
<ContentImageVariant4 src={imageSrc} alt={imageAlt} /> // 35% width
<ContentImageVariant6 src={imageSrc} alt={imageAlt} /> // 100% width, margin
```

### 3. Texto com FramedText

```typescript
import { FramedTextTarja1, FramedTextTarja2 } from "../FramedText";

// Texto com borda diagonal padrão (1.75rem)
const Text = styled(FramedTextTarja1)`
  margin-left: 5rem;
  width: 65%;
`;

// Texto com borda diagonal maior (2.25rem)
const Text = styled(FramedTextTarja2)`
  margin: 0 auto;
`;

// Altura customizada via prop
<FramedText tarjaHeight="3rem">Conteúdo</FramedText>;
```

### 4. Títulos e Parágrafos

```typescript
import { BaseTitle, BaseParagraphs } from "../../styles/ModularParadaStyles";

// Título padrão
const Title = styled(BaseTitle)``;

// Título com customizações
const Title = styled(BaseTitle)`
  margin-left: 3rem;
  width: 90%;

  .title-text span {
    font-size: 64px; // destaque para spans
  }
`;

// Parágrafos com formatação automática
const Paragraphs = styled(BaseParagraphs)`
  // Suporte automático para:
  // - .paragraph-title (títulos em negrito)
  // - .bullet-title (títulos de lista)
  // - Listas com bullets personalizados
`;
```

## Padrões de Layout Identificados

### Padrão 1: Layout Horizontal (1-1, 1-3, 1-4, 1-5, 2-1, 2-4)

- Título + Texto lado a lado
- Imagem abaixo
- Margin-left: 5rem

### Padrão 2: Layout Coluna Simples (1-2, 1-6, 1-7)

- Título no topo
- Texto centralizado
- Imagem integrada ou abaixo

### Padrão 3: Layout Coluna Complexa (2-2, 2-3)

- Título no topo
- Texto com múltiplas imagens
- Flexbox para organização

## Migração Gradual

### Etapa 1: Usar ContentImage modular

```typescript
// ANTES
export const ContentImage = ContentImageVariant4;

// DEPOIS
import ContentImage from "../ContentImage";
export const ContentImage = styled(ContentImage)`
  width: 35%;
  object-fit: contain;
`;
```

### Etapa 2: Migrar para layouts modulares

```typescript
// ANTES
export const ContentWrapper = styled(BaseContentWrapper)`
  margin-left: 5rem;
  flex-direction: column;
`;

// DEPOIS
import { ColumnLayout } from "../../styles/ModularParadaStyles";
export const ContentWrapper = styled(ColumnLayout)`
  margin-left: 5rem;
`;
```

### Etapa 3: Aplicar FramedText

```typescript
// ANTES
export const Text = styled(BaseText)`
  width: 65%;
  margin-left: 0;
`;

// DEPOIS
import { FramedTextTarja1 } from "../FramedText";
export const Text = styled(FramedTextTarja1)`
  width: 65%;
  margin-left: 0;
`;
```

## Vantagens do Sistema Modular

1. **Flexibilidade**: Props configuráveis eliminam variantes desnecessárias
2. **Consistência**: Estilos base garantem uniformidade visual
3. **Manutenibilidade**: Mudanças centralizadas propagam automaticamente
4. **Performance**: Menos CSS duplicado
5. **Legibilidade**: Código mais limpo e semântico

## Compatibilidade

O sistema mantém total compatibilidade com os componentes existentes através de exports de compatibilidade no `ModularParadaStyles.ts`.
