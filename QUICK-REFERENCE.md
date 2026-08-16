# Documento de Referência Rápida

## 🚀 Comandos Básicos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Verificar código (lint)
npm run lint

# Corrigir erros automáticos
npm run lint:fix

# Visualizar build de produção
npm run preview
```

## 📁 Estrutura Resumida

```
src/
├── components/       # Componentes React
├── data/            # Dados e constantes
├── hooks/           # Hooks customizados
├── utils/           # Funções utilitárias
├── styles/          # Estilos CSS
├── App.jsx          # App principal
└── index.jsx        # Ponto de entrada
```

## 📦 Importações Comuns

```jsx
// Dados
import { BANDEIRAS } from "@/data/campaign";
import { NOTICIAS } from "@/data/news";
import { REGIOES } from "@/data/regions";
import { VALORES, TRAJETORIA, FORMACAO } from "@/data/about";
import { CORES } from "@/data/colors";
import { NAV_LINKS } from "@/data/navigation";
import { ELECTION_DATE, CANDIDATE_NUMBER } from "@/data/constants";

// Hooks
import { useCountdown } from "@/hooks/useCountdown";

// Componentes
import Card from "@/components/Common/Card";
import Button from "@/components/Common/Button";
import Section from "@/components/Common/Section";

// Utilidades
import { formatarData, diasRestantes } from "@/utils/dates";

// Ícones (Lucide React)
import { Icon1, Icon2, Icon3 } from "lucide-react";
```

## 🎯 Fluxo de Desenvolvimento

### 1. Adicionar Novo Dado
Edite um arquivo em `src/data/`

```javascript
// src/data/campaign.js
const NOVA_BANDEIRA = { ... };
```

### 2. Criar Componente para Exibir
Crie em `src/components/`

```jsx
// src/components/Sections/NovaBandeira.jsx
import { NOVA_BANDEIRA } from "@/data/campaign";

export function NovaBandeira() { ... }
```

### 3. Usar no App.jsx
Importe e use

```jsx
// src/App.jsx
import { NovaBandeira } from "@/components/Sections/NovaBandeira";

export default function App() {
  return (
    <>
      <NovaBandeira />
    </>
  );
}
```

## 🎨 Sistema de Cores

```javascript
const CORES = {
  blue: {
    bg: "bg-azul",           // Fundo azul
    text: "text-azul",       // Texto azul
    ring: "ring-azul",       // Borda azul
    soft: "bg-azul-soft",    // Fundo azul claro
    border: "border-azul"    // Borda azul
  },
  green: { ... },
  gold: { ... }
};
```

## 📱 Grid Responsivo

```jsx
// Mobile, tablet, desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 coluna mobile, 2 tablets, 3 desktop */}
</div>
```

## 🧩 Componentes Reutilizáveis

### Card
```jsx
<Card
  titulo="Título"
  descricao="Descrição"
  icon={IconComponent}
  corFundo="bg-azul-soft"
  corTexto="text-azul"
/>
```

### Button
```jsx
<Button variant="primary|secondary|outline" size="sm|md|lg">
  Texto do botão
</Button>
```

### Section
```jsx
<Section
  id="secao-1"
  titulo="Título"
  subtitulo="Subtítulo"
  background="bg-white|bg-gray-50"
>
  Conteúdo
</Section>
```

## 🔗 Ciclo de Vida de um Componente

```jsx
import { useEffect, useState } from "react";

export function MyComponent() {
  // 1. State
  const [count, setCount] = useState(0);

  // 2. Effects (lado do servidor)
  useEffect(() => {
    console.log("Componente montou ou atualizou");
    return () => console.log("Componente vai desmontar");
  }, [count]); // Dependências

  // 3. Render
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}
```

## ✅ Checklist Antes de Deploy

- [ ] Todos os links funcionam
- [ ] Responsive em mobile, tablet, desktop
- [ ] Sem erros no console
- [ ] Imagens otimizadas
- [ ] Sem console.log desnecessários
- [ ] Build compila sem erros
- [ ] SEO meta tags preenchidas

## 🤝 Padrões de Código

### Nomes de Componentes
```jsx
✅ MyComponent.jsx       // PascalCase
❌ my-component.jsx      // kebab-case
❌ mycomponent.jsx       // camelCase
```

### Nomes de Funções
```javascript
✅ formatarData()        // camelCase
❌ formatar_data()       // snake_case
❌ FormatarData()        // PascalCase
```

### Nomes de Hooks
```javascript
✅ useCountdown          // Sempre com "use" prefix
❌ countdown             // Sem prefix
❌ countDown             // Inconsistente
```

### Nomes de Arquivos de Dados
```javascript
✅ campaign.js           // camelCase
❌ Campaign.js           // PascalCase
❌ campaign-data.js      // kebab-case
```

## 🐛 Debug Útil

```jsx
// Log no console
console.log("Valor:", variavel);

// Debug componente
console.table(arrayObjetos);

// React Developer Tools (extensão Chrome)
// Inspeciona componentes React

// Breakpoints no DevTools
// F12 → Sources → Clica no código
```

## 📚 Documentação Importante

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev/guide/)

---

**Última atualização:** 2026-08-16
