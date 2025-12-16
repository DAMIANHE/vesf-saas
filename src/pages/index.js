import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <h1>VESF™</h1>
      <h2>Señales Débiles que anticipan riesgos</h2>
      <p>
        Sistema institucional de apoyo al juicio estratégico del Consejo.
      </p>

      <Link href="/dashboard">
        <button>Ingresar al Dashboard</button>
      </Link>

      <p className="disclaimer">
        VESF™ no predice eventos ni garantiza resultados financieros.
      </p>
    </main>
  );
}
