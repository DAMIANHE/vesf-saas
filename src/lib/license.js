export function licenciaValida(expiracionISO) {
  const hoy = new Date();
  const exp = new Date(expiracionISO);
  return hoy <= exp;
}
