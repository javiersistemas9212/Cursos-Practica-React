import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Authenticate() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      alert("Por favor rellena los campos");
    }
  };

  // CASO 1: Si NO está logueado, le mostramos el formulario de Login
  if (!user) {
    return (
      <div style={{ maxWidth: '300px', margin: '40px auto' }}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }

  // CASO 2: Si SÍ está logueado, ve el contenido protegido
  return (
    <div>
      <h2>Tus Cursos Disponibles</h2>
      <p>Como eres usuario tipo <strong>{user.role}</strong>, tienes acceso al siguiente material:</p>
      <ul>
        <li>📚 Curso Profesional de React Avanzado</li>
        <li>🛠️ Taller de Arquitectura de Software con Context y Hooks</li>
      </ul>
    </div>
  );
}