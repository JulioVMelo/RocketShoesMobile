export const {format: formatPrice} = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
