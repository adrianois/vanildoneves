/**
 * Exemplo de Componente - Section
 * Container reutilizável para seções com padrão de estilo
 */

import React from "react";

export function Section({
  id,
  titulo,
  subtitulo,
  background = "bg-white",
  children,
  containerClassName = "",
}) {
  return (
    <section id={id} className={`py-16 ${background}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {titulo && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-azul">{titulo}</h2>
            {subtitulo && <p className="text-lg text-gray-600 mt-4">{subtitulo}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
