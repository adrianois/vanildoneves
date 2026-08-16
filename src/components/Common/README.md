# Componentes Reutilizáveis

Esta pasta contém componentes que são usados em múltiplos lugares do site.

## Disponíveis

### Card
Componente para exibir informações em um card.

```jsx
import Card from "./Card";
import { Trophy } from "lucide-react";

<Card
  titulo="Meu Título"
  descricao="Descrição do card"
  icon={Trophy}
  corFundo="bg-azul-soft"
  corTexto="text-azul"
/>
```

### Button
Botão reutilizável com variantes.

```jsx
import Button from "./Button";
import { Vote } from "lucide-react";

<Button variant="primary" size="lg">
  <Vote size={20} /> Voto 70.123
</Button>
```

### Section
Container para seções com padrão.

```jsx
import Section from "./Section";

<Section
  id="secao-1"
  titulo="Título da Seção"
  subtitulo="Subtítulo opcional"
  background="bg-gray-50"
>
  {/* Conteúdo */}
</Section>
```

## Adicionando Novos Componentes

1. Crie um arquivo com o nome do componente em PascalCase: `MyComponent.jsx`
2. Exporte um componente com props bem definidas
3. Documente o componente com exemplos de uso
4. Adicione o componente a este README
