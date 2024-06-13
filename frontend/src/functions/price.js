export const getProperPrice = (price) => {
  return parseFloat(Number(price)?.toFixed(0)).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
}