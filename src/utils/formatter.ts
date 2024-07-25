export const dateFormatter = new Intl.DateTimeFormat('pt-BR')
// Intl API de internacionalização do JS

export const priceFotmatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency', // moeda
  currency: 'BRL', // real
})
