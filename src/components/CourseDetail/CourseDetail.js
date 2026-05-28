
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES_DATA } from '../../data/coursesData';
import { useAuth } from '../../context/AuthContext';

export default function CourseDetail (){

    const { courseId } = useParams();
    const { user } = useAuth();
    

    const course = COURSES_DATA.find(c => c.id ==  courseId);

    if (!course) {
        return (
      <div style={styles.container}>
        <h2>Curso no encontrado</h2>
               
        <Link to="/cursos">Volver al catálogo</Link>
      </div>
       );
        
    }

    return (
    <div style={styles.container}>
      <Link to="/cursos" style={styles.back}>← Volver al catálogo</Link>
      <div style={styles.header}>
        <h1>{course.title}</h1>
        <p style={styles.meta}>Nivel: <strong>{course.level}</strong> | Duración: <strong>{course.duration}</strong></p>
      </div>
      <div style={styles.content}>
        <h3>Acerca de este curso</h3>
        <p>{course.description}</p>
        <button style={styles.enrollBtn} onClick={() => alert(`¡Te has inscrito a: ${course.title}!`)}>
          Inscribirme Ahora
        </button>

           {user ? (
              <Link to={`/modules/${course.id}`} style={styles.link}>Ver Contenido</Link>
           ):(
             <p>Para ver el contenido del curso inicie sesión</p>
           )}

      </div>
    </div>
  );

}

const styles = {
  container: { padding: '40px', maxWidth: '800px', margin: '0 auto' },
  back: { color: '#666', textDecoration: 'none', display: 'inline-block', marginBottom: '20px' },
  header: { borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '20px' },
  meta: { color: '#666', fontSize: '0.95rem' },
  content: { lineHeight: '1.6' },
  link: { display: 'block', marginTop: '15px', color: '#0070f3', textDecoration: 'none', fontWeight: '500' },
  enrollBtn: { backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer', marginTop: '20px' }
};