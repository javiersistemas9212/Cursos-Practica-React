import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {

    return(
        <div style={styles.container}>
            <h1>Impulsa tu carrera como Desarrollador</h1>
            <p>Aprende las tecnologías más demandadas del mercado con código limpio y proyectos reales.</p>
            <Link to="/cursos" style={styles.cta}>Explorar Catálogo</Link>
        </div>

    );

}


const styles = {
  container: { textAlign: 'center', padding: '80px 20px', maxWidth: '800px', margin: '0 auto' },
  cta: { display: 'inline-block', backgroundColor: '#0070f3', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }
};