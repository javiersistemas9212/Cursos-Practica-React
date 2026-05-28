import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar (){

  const { user, logout } = useAuth();

    const activeStyle = ({ isActive }) => ({
        color: isActive ? '#0070f3' : '#333',
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: 'none'
    });

    return (
      <nav style={styles.nav}>
          <Link to="/" style={styles.logo}>🚀 DevAcademy</Link>
        <div style={styles.links}>
             <NavLink to="/" style={activeStyle}>Inicio</NavLink>
             <NavLink to="/cursos" style={activeStyle}>Cursos</NavLink>
        </div>

        {user ? (
          <div style={styles.userlogin}>
            <span>{user.avatar} Bienvenido, <strong>{user.name}</strong></span>
            <button onClick={logout} style={{ color: 'red' }}>Cerrar Sesión</button>
          </div>
        ) : (
          <NavLink to="/login" style={activeStyle}>Invitado (Por favor inicia sesión)</NavLink>
    
        )}


      </nav>
    );

}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#fff', borderBottom: '1px solid #eaeaea' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3', textDecoration: 'none' },
  links: { display: 'flex', gap: '20px' },
  userlogin: { display: 'flex', alignItems: 'center', gap: '15px' }
};