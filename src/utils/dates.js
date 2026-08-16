/**
 * Utilitários para formatação de datas
 */

/**
 * Formata uma data para o padrão brasileiro
 * @param {Date|string} data - Data a ser formatada
 * @returns {string} Data formatada em pt-BR
 */
export function formatarData(data) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(data));
}

/**
 * Calcula dias restantes para uma data
 * @param {Date} dataAlvo - Data alvo
 * @returns {number} Número de dias
 */
export function diasRestantes(dataAlvo) {
  const agora = new Date();
  const diferenca = dataAlvo.getTime() - agora.getTime();
  return Math.ceil(diferenca / (1000 * 60 * 60 * 24));
}
