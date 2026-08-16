# Documentação - Pasta Data

Esta pasta centraliza **todos os dados** do projeto: constantes, arrays, configurações e informações dinâmicas.

## Estrutura de Arquivos

### 📋 campaign.js
Dados das 10 bandeiras da campanha. Cada bandeira tem:
- `id` - identificador único
- `icon` - ícone do Lucide React
- `cor` - cor principal (blue, green, gold)
- `titulo` - nome da bandeira
- `curta` - descrição curta
- `texto` - texto completo

```javascript
import { BANDEIRAS } from "@/data/campaign";

BANDEIRAS.forEach(bandeira => {
  console.log(bandeira.titulo);
});
```

### 📰 news.js
Notícias, agenda e posts da campanha. Cada notícia tem:
- `id` - identificador único
- `categoria` - categoria da notícia
- `tag` - rótulo (Agenda, Infraestrutura, etc)
- `cor` - cor do rótulo
- `data` - data da publicação
- `titulo` - título
- `lead` - resumo
- `corpo` - texto completo

### 🗺️ regions.js
Regiões de atuação da campanha em MS. Cada região tem:
- `id` - identificador
- `nome` - nome da região
- `municipios` - municípios inclusos
- `texto` - descrição

### 👤 about.js
Informações pessoais sobre Vanildo:
- `VALORES` - hobbies e interesses pessoais
- `TRAJETORIA` - experiência profissional
- `FORMACAO` - educação e qualificações

### 🎨 colors.js
Paleta de cores com classes CSS do Tailwind para cada tom:
- `blue` - cor primária azul
- `green` - cor secundária verde
- `gold` - cor de destaque dourado

### 🧭 navigation.js
Links de navegação principal do site:
- `href` - âncora ou URL
- `label` - texto do link

### ⚙️ constants.js
Constantes globais:
- `ELECTION_DATE` - data da eleição
- `CANDIDATE_NUMBER` - número do candidato
- `CAMPAIGN_NAME` - nome da campanha
- `STATE` - estado
- `POSITION` - cargo

## Como Usar

### Importar em um Componente

```jsx
import { BANDEIRAS } from "@/data/campaign";
import { NOTICIAS } from "@/data/news";
import { CORES } from "@/data/colors";
import { ELECTION_DATE } from "@/data/constants";

export function MyComponent() {
  return (
    <div>
      {BANDEIRAS.map(b => (
        <div key={b.id}>{b.titulo}</div>
      ))}
    </div>
  );
}
```

### Usar um Tipo de Cor

```jsx
const corClasses = CORES.blue; // { bg: "bg-azul", text: "text-azul", ... }

<div className={`${corClasses.bg} ${corClasses.text}`}>
  Conteúdo com cor azul
</div>
```

## Boas Práticas

✅ **Centralizado** - Todos os dados em um único lugar  
✅ **Reutilizável** - Importar em qualquer componente  
✅ **Fácil de Atualizar** - Mudar dados sem alterar componentes  
✅ **Tipado** - Usar TypeScript no futuro para melhor DX  
✅ **Organizado** - Um arquivo por tipo de dado  

## Próximas Melhorias

- [ ] Separar dados em um CMS (Strapi, Contentful, etc)
- [ ] Adicionar TypeScript com interfaces
- [ ] Criar um arquivo de validação de dados
- [ ] Implementar cache local
