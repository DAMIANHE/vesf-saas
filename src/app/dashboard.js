import RadarVESF from '../components/RadarVESF';
import Semaforo from '../components/Semaforo';
import Footer from '../components/Footer';
import { calcularIndiceVESF } from '../lib/vesfMath';

export default function Dashboard() {
  const datos = [
    { variable: "Inflación", oficial: 89, real: 101, peso: 0.15 },
    { variable: "Morosidad", oficial: 2.5, real: 3.4, peso: 0.12 },
    { variable: "Costo de Fondeo", oficial: 6.2, real: 7.1, peso: 0.1 },
    { variable: "Crecimiento Cartera", oficial: 8, real: 5.5, peso: 0.1 },
    { variable: "Liquidez", oficial: 1.4, real: 1.1, peso: 0.08 },
    { variable: "Retención Socios", oficial: 95, real: 91, peso: 0.1 },
    { variable: "Capital Regulatorio", oficial: 12, real: 10.8, peso: 0.1 },
    { variable: "Digitalización", oficial: 70, real: 55, peso: 0.08 },
    { variable: "Productividad", oficial: 100, real: 92, peso: 0.09 },
    { variable: "Confianza Institucional", oficial: 85, real: 78, peso: 0.08 }
  ];

  const indice = calcularIndiceVESF(datos);

  return (
    <main className="container">
      <h1>Dashboard Estratégico VESF™</h1>

      <RadarVESF datos={datos} />

      <Semaforo indice={indice} />

      <section className="texto">
        <p>
          Este indicador representa una <strong>estimación institucional</strong> del nivel
          de atención estratégica del Plan Estratégico y BSC.
        </p>

        <p>
          La trazabilidad registrada por VESF™ tiene fines exclusivamente institucionales
          y de evidencia de diligencia estratégica. No será utilizada para evaluación,
          control ni sanción de personas.
        </p>
      </section>

      <Footer />
    </main>
  );
}
