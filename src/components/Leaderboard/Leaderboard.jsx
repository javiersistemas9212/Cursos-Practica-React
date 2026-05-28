import { useMemo, useState } from "react";
import { COURSES_USERS } from "../../data/courseUsers";
import "./Leaderboard.css";


export default function Leaderboard(){

    const [ students ] = useState(COURSES_USERS);
    const [ modoOscuro, setModoOscuro ] = useState(false);


    const topEstudiantes = useMemo(() => {

        return [...students]
                  .filter(x => x.role == 'student')
                  .sort((a, b) => b.puntos - a.puntos)
                  .slice(0, 5);
        },[students]);

    return (
    <div className={`leaderboard-wrapper ${modoOscuro ? 'dark-theme' : ''}`}>
      
      {/* Botón de prueba para demostrar que el re-render no vuelve a ordenar el array */}
      <button className="theme-toggle-btn" onClick={() => setModoOscuro(!modoOscuro)}>
        Cambiar Vista ({modoOscuro ? 'Claro' : 'Oscuro'})
      </button>

      <div className="leaderboard-card">
        <div className="leaderboard-header">
          <h2>🏆 Ranking de Estudiantes</h2>
          <p>Los mejores programadores de la plataforma esta semana</p>
        </div>

        <ul className="leaderboard-list">
          {topEstudiantes.map((estudiante, index) => {
            // Clases especiales para el podio (Oro, Plata, Bronce)
            let podioClass = "";
            if (index === 0) podioClass = "gold";
            if (index === 1) podioClass = "silver";
            if (index === 2) podioClass = "bronze";

            return (
              <li key={estudiante.id} className={`leaderboard-item ${podioClass}`}>
                <div className="item-left">
                  <span className="rank-number">{index + 1}</span>
                  <span className="student-avatar">{estudiante.avatar}</span>
                  <span className="student-name">{estudiante.name}</span>
                </div>
                <div className="item-right">
                  <span className="student-points"><strong>{estudiante.puntos}</strong> pts</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

}