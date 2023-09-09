export const formatPriceToReal = (price: number) => {
  return `R$ ${parseFloat(price.toString()).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
