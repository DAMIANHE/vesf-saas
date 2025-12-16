export function calcularIndiceVESF(datos) {
  let suma = 0;

  datos.forEach(d => {
    const ri = d.real - d.oficial;
    const riNorm = ri / 100;
    suma += riNorm * d.peso;
  });

  const indice = 100 * (1 - Math.abs(suma));
  return indice;
}
