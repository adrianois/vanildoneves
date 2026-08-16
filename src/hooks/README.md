# Documentação - Pasta Hooks

Esta pasta contém **hooks customizados** do React - lógica compartilhada que pode ser reutilizada em vários componentes.

## useCountdown

Contador regressivo até a data da eleição.

### Uso

```jsx
import { useCountdown } from "@/hooks/useCountdown";
import { ELECTION_DATE } from "@/data/constants";

export function MyComponent() {
  const { dias, horas, minutos, segundos } = useCountdown(ELECTION_DATE);

  return (
    <div>
      <h2>Faltam {dias} dias</h2>
      <p>{horas}h {minutos}m {segundos}s</p>
    </div>
  );
}
```

### Retorno

```javascript
{
  dias: 45,
  horas: 12,
  minutos: 30,
  segundos: 45
}
```

## Criando Novo Hook

Exemplo: Hook para gerenciar um modal

```jsx
// src/hooks/useModal.js
import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
}
```

Uso:

```jsx
import { useModal } from "@/hooks/useModal";

export function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <button onClick={open}>Abrir Modal</button>
      {isOpen && (
        <div>
          Modal aberto
          <button onClick={close}>Fechar</button>
        </div>
      )}
    </>
  );
}
```

## Boas Práticas

✅ Hooks sempre começam com `use`  
✅ Usar `useState` para estado local  
✅ Usar `useEffect` para side effects  
✅ Retornar dados e funções em um objeto  
✅ Documentar com exemplos de uso  

## Hooks Úteis para Futuro

- `useFetch` - fazer requisições HTTP
- `useLocalStorage` - persistir dados no localStorage
- `useForm` - gerenciar formulários
- `usePagination` - paginar listas
- `useDebounce` - debounce de valores
