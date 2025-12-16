export default function Semaforo({ indice }) {
  let estado = "Nivel de atención bajo";
  let color = "green";

  if (indice < 85) {
    estado = "Nivel de atención medio";
    color = "orange";
  }
  if (indice < 75) {
    estado = "Nivel de atención elevado";
    color = "red";
  }

  return (
    <div style={{ border: `2px solid ${color}`, padding: "10px" }}>
      <h3>{estado}</h3>
      <p>Índice VESF agregado: {indice.toFixed(2)}</p>
      <p><em>Este estado no implica acción automática.</em></p>
    </div>
  );
}
