export function falta(item) {
  return Math.max(0, item.planejado - item.estoque);
}

export function textoCompra(item) {
  const f = falta(item);
  return f > 0 ? `Comprar ${f} ${item.unidade}` : 'Estoque suficiente';
}

export function paraNumero(texto) {
  if (texto.trim() === '') return NaN;
  return Number(texto.replace(',', '.'));
}