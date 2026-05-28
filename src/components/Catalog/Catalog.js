import React from 'react';
import { useCourses } from "../../hooks/useCourses";
import { Link } from 'react-router-dom';


export default function Catalog(){

    const { courses, loading } = useCourses();

    if (loading) {
        return <div style={styles.center}>Cargando cursos de desarrollo...</div>
    }

    if (!courses || courses.length === 0) {
    return <div style={styles.center}>No se encontraron cursos disponibles en este momento.</div>;
  }

    return (
    <div style={styles.container}>
      <h2>Nuestro Catálogo de Especializaciones</h2>
      <div style={styles.grid}>
        {courses?.map(course => (
          <div key={course.id} style={styles.card}>
            <span style={styles.badge}>{course.category}</span>
            <h3>{course.title}</h3>
            <p>{course.description.substring(0, 80)}...</p>
            <Link to={`/cursos/${course.id}`} style={styles.link}>Ver Plan de Estudios →</Link>
          </div>
        ))}
      </div>
    </div>
  );

}

const styles = {
  container: { padding: '40px', maxWidth: '1200px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' },
  card: { border: '1px solid #eaeaea', borderRadius: '12px', padding: '25px', position: 'relative', backgroundColor: '#fff' },
  badge: { backgroundColor: '#f0f7ff', color: '#0070f3', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' },
  link: { display: 'block', marginTop: '15px', color: '#0070f3', textDecoration: 'none', fontWeight: '500' },
  center: { textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' }
};