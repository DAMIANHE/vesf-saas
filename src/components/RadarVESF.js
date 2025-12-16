import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function RadarVESF({ datos }) {
  useEffect(() => {
    const ctx = document.getElementById('radarVESF');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: datos.map(d => d.variable),
        datasets: [
          {
            label: 'Supuestos del Plan Estratégico',
            data: datos.map(d => d.oficial),
            borderColor: '#1e3a8a',
            backgroundColor: 'rgba(30,58,138,0.2)'
          },
          {
            label: 'Señales emergentes del entorno',
            data: datos.map(d => d.real),
            borderColor: '#f97316',
            backgroundColor: 'rgba(249,115,22,0.2)'
          }
        ]
      }
    });
  }, [datos]);

  return <canvas id="radarVESF"></canvas>;
}
