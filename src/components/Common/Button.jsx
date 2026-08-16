/**
 * Exemplo de Componente - Button
 * Botão reutilizável com múltiplas variantes
 */

import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles = "font-bold rounded-lg transition flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-azul text-white hover:bg-blue-700",
    secondary: "border-2 border-azul text-azul hover:bg-azul hover:text-white",
    outline: "border-2 border-gray-300 text-gray-900 hover:border-azul hover:text-azul",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
