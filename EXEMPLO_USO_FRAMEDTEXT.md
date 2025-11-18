// EXEMPLO DE USO DO FRAMEDTEXT
// Você pode usar de 3 formas diferentes:

// 1. Componente FramedText com props (mais flexível)
import FramedText from "../../components/FramedText";

<FramedText tarjaType="tarja1" marginLeft="5rem" marginRight="1rem">
  <p className="chamada">Seu texto aqui...</p>
  <b>Título em negrito</b>
  {/* Outros conteúdos */}
</FramedText>

// 2. Componentes pré-configurados (mais simples)
import { TextWithTarja1, TextWithTarja2 } from "../../components/FramedText";

<TextWithTarja1 marginLeft="5rem" marginRight="1rem">
  <p className="chamada">Texto com tarja padrão 1 (1rem altura)</p>
</TextWithTarja1>

<TextWithTarja2 marginLeft="5rem" marginRight="1rem">
  <p className="chamada">Texto com tarja padrão 2 (1.5rem altura)</p>
</TextWithTarja2>

// 3. Para usar nos estilos existentes, substitua:
// export const Text = styled(BaseText)`...`;
// Por:
// export const Text = styled(TextWithTarja1)`...`;
// ou
// export const Text = styled(TextWithTarja2)`...`;
