# Documentação - Pasta Utils

Esta pasta contém **funções utilitárias** reutilizáveis que não são hooks, mas sim lógica pura.

## dates.js

### formatarData(data)

Formata uma data para o padrão brasileiro.

```jsx
import { formatarData } from "@/utils/dates";

const formatted = formatarData("2026-10-04");
// "domingo, 4 de outubro de 2026"
```

### diasRestantes(dataAlvo)

Calcula quantos dias faltam até uma data.

```jsx
import { diasRestantes } from "@/utils/dates";

const dias = diasRestantes(new Date("2026-10-04"));
// 45
```

## Como Adicionar Novas Utilidades

### Exemplo: Formatadores

```jsx
// src/utils/formatters.js

export function formatarTelefone(numero) {
  return numero.replace(/(\d{2})(\d{4,5})(\d{4})/g, "($1) $2-$3");
}

export function formatarCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

export function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);
}
```

Uso:

```jsx
import { formatarTelefone, formatarCPF, formatarMoeda } from "@/utils/formatters";

<p>{formatarTelefone("67999999999")}</p>
<p>{formatarCPF("12345678901")}</p>
<p>{formatarMoeda(1500)}</p>
```

### Exemplo: Validadores

```jsx
// src/utils/validators.js

export function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isTelefone(telefone) {
  return /^(\d{2})9\d{8}$/.test(telefone.replace(/\D/g, ""));
}

export function isCPF(cpf) {
  const cleaned = cpf.replace(/\D/g, "");
  return cleaned.length === 11;
}
```

Uso:

```jsx
import { isEmail, isTelefone } from "@/utils/validators";

if (isEmail(email)) {
  // Email válido
}
```

## Boas Práticas

✅ Funções puras (sem side effects)  
✅ Um arquivo por tipo de utilidade  
✅ Nomes descritivos e claros  
✅ Documentar com exemplos  
✅ Reutilizável em qualquer lugar  

## Estrutura Sugerida

```
utils/
├── dates.js          # Formatação e cálculo de datas
├── formatters.js     # Formatação de valores
├── validators.js     # Validação de dados
├── strings.js        # Manipulação de strings
└── README.md         # Este arquivo
```
