# Documentação - Pasta Sections

Esta pasta contém componentes de seções principais do site. Cada seção é um componente isolado que pode ser reutilizado ou modificado.

## Estrutura Recomendada

```
Sections/
├── HeroSection.jsx        # Hero/Banner principal
├── AboutSection.jsx       # Quem é Vanildo
├── BandeirasSection.jsx   # As 10 bandeiras
├── NoticiasSection.jsx    # Notícias e agenda
├── RegioesSection.jsx     # Regiões de atuação
├── MateriaisSection.jsx   # Materiais da campanha
├── VoluntariosSection.jsx # CTA para voluntários
└── README.md             # Este arquivo
```

## Padrão de Componente

Cada seção deve seguir este padrão:

```jsx
// src/components/Sections/MySection.jsx
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { Section } from "@/components/Common/Section";
import Button from "@/components/Common/Button";

export function MySection() {
  return (
    <Section
      id="my-section"
      titulo="Título da Seção"
      subtitulo="Subtítulo opcional"
      background="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Conteúdo */}
      </div>
    </Section>
  );
}
```

## Como Usar no App.jsx

```jsx
import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutSection } from "@/components/Sections/AboutSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* Outras seções */}
    </div>
  );
}
```

## Próximas Etapas

1. Extrair cada seção do `App.jsx` em um componente separado
2. Colocar em `Sections/`
3. Importar em `App.jsx`

Exemplo:

```jsx
// src/components/Sections/BandeirasSection.jsx
import React from "react";
import { Section } from "@/components/Common/Section";
import Card from "@/components/Common/Card";
import { BANDEIRAS } from "@/data/campaign";
import { CORES } from "@/data/colors";

export function BandeirasSection() {
  return (
    <Section
      id="bandeiras"
      titulo="As 10 Bandeiras"
      background="bg-white"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {BANDEIRAS.map((bandeira) => {
          const Icon = bandeira.icon;
          const corClasses = CORES[bandeira.cor];

          return (
            <Card
              key={bandeira.id}
              titulo={bandeira.titulo}
              descricao={bandeira.curta}
              icon={Icon}
              corFundo={corClasses.soft}
              corTexto={corClasses.text}
            />
          );
        })}
      </div>
    </Section>
  );
}
```
