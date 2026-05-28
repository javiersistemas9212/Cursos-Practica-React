import { Link, useParams } from "react-router-dom";
import { useContents } from "../../hooks/useContents";
import styles from "./CourseContent.module.css";
import { useState } from "react";

export default function CourseContent() {
  const { courseId } = useParams();
  const { contentModule, loading } = useContents(courseId);
  const [expandedModules, setExpandedModules] = useState({ 1: true });

  const toggleModule = (id) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };


  if (loading) {
    // CORRECCIÓN: style={} espera un objeto inline, para clases CSS se usa className
    return <div className={styles.center}>Cargando cursos de desarrollo...</div>;
  }

  // Si no hay contenido, o si content no es un array Y tampoco tiene una propiedad 'modules' que sea array
  const modulesArray = Array.isArray(contentModule) ? contentModule : contentModule?.modules;


  if (!modulesArray || modulesArray.length === 0) {
    return <div className={styles.center}>No se encontraron modulos disponibles en este momento.</div>;
  }

  const getIcon = (type) => {
    switch (type) {
      case 'video': return '▶️';
      case 'reading': return '📄';
      case 'quiz': return '📝';
      default: return '⚙️';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Contenido del Curso</h2>
          <p className={styles.subtitle}>Temario oficial del módulo</p>
        </header>

        <div className={styles.syllabusList}>
          {/* Mapeamos la variable segura 'modulesArray' */}
          {modulesArray.map((module) => {
            const isExpanded = expandedModules[module.id];

            return (
              <div key={module.id} className={styles.moduleWrapper}>
                {/* Cabecera del Módulo */}
                <button
                  className={`${styles.moduleHeader} ${isExpanded ? styles.activeHeader : ''}`}
                  onClick={() => toggleModule(module.id)}
                >
                  <div className={styles.moduleInfo}>
                    <span className={`${styles.arrow} ${isExpanded ? styles.arrowDown : ''}`}>▸</span>
                    <span className={styles.moduleTitle}>{module.title}</span>
                  </div>
                  <span className={styles.moduleDuration}>{module.duration}</span>
                </button>

                {/* Lista de Lecciones Descomentada y Blindada con ?. */}
                <div className={`${styles.lessonsList} ${isExpanded ? styles.show : styles.hide}`}>
                  {module.lessons?.map((lesson) => (
                    <div key={lesson.id} className={styles.lessonItem}>
                      <div className={styles.lessonMain}>
                        <span className={styles.lessonIcon}>{getIcon(lesson.type)}</span>
                        <span className={styles.lessonTitle}>{lesson.title}</span>
                      </div>
                      <span className={styles.lessonDuration}>{lesson.duration}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

           <Link to={`/quiz/${courseId}`} style={styles.link}>Iniciar Quiz →</Link>
    
      </div>

         
    </>
  );
}