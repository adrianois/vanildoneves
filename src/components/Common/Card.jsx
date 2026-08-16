/**
 * Exemplo de Componente - Card
 * Este é um componente reutilizável que pode ser usado em várias seções
 */

import React from "react";

export function Card({
  titulo,
  descricao,
  icon: Icon,
  corFundo = "bg-azul-soft",
  corTexto = "text-azul",
  children,
  ...props
}) {
  return (
    <div
      className={`${corFundo} p-6 rounded-lg hover:shadow-lg transition border-l-4 border-${corTexto}`}
      {...props}
    >
      {Icon && <Icon size={28} className={`${corTexto} mb-3`} />}
      
      {titulo && <h3 className="font-bold text-gray-900 mb-2">{titulo}</h3>}
      
      {descricao && <p className="text-sm text-gray-700 mb-3">{descricao}</p>}
      
      {children}
    </div>
  );
}

export default Card;
