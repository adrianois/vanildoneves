# Estrutura do Projeto - Site Vanildo Neves

## 📁 Organização das Pastas

### `/src`
Código-fonte principal da aplicação

#### `/src/components`
Componentes React reutilizáveis e específicos do site

- **Header/** - Cabeçalho e hero section
- **Navigation/** - Componentes de navegação
- **Sections/** - Seções principais do site (Bandeiras, Notícias, Regiões, etc.)
- **Common/** - Componentes compartilhados (Card, Button, etc.)

#### `/src/data`
Arquivos de dados e constantes

- **campaign.js** - Dados das 10 bandeiras
- **news.js** - Notícias e agenda
- **regions.js** - Regiões de atuação
- **about.js** - Valores, trajetória e formação
- **colors.js** - Paleta de cores
- **navigation.js** - Links de navegação
- **constants.js** - Constantes globais

#### `/src/hooks`
Hooks customizados do React

- **useCountdown.js** - Hook para contador de tempo até eleição

#### `/src/utils`
Funções utilitárias

- **dates.js** - Funções de formatação de datas

#### `/src/styles`
Estilos CSS e configurações globais

- **globals.css** - Estilos globais

### `/public`
Arquivos estáticos

- **images/** - Imagens do site
- **assets/** - Outros ativos (PDFs, vídeos, etc.)

## 🏗️ Como Usar

### Adicionar um novo componente:
```javascript
// src/components/Common/MyComponent.jsx
import React from 'react';

export function MyComponent({ prop1, prop2 }) {
  return <div>Meu componente</div>;
}
```

### Importar dados:
```javascript
import { BANDEIRAS } from '@/data/campaign';
import { CORES } from '@/data/colors';
```

### Usar hooks customizados:
```javascript
import { useCountdown } from '@/hooks/useCountdown';

const { dias, horas, minutos, segundos } = useCountdown(DATA_ALVO);
```

## 📝 Convenções

- Componentes em PascalCase: `MyComponent.jsx`
- Arquivos de dados em camelCase: `campaign.js`
- Hooks começam com `use`: `useCountdown.js`
- Funções utilitárias em camelCase: `formatarData()`

## 🚀 Próximos Passos

1. Criar componentes principais baseados em `/src/components`
2. Adicionar arquivo `App.jsx` em `/src`
3. Configurar `index.jsx` como ponto de entrada
4. Adicionar estilos CSS
5. Importar dependências necessárias
