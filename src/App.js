import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog/Catalog';
import CourseDetail from './components/CourseDetail/CourseDetail';
import CourseContent from './components/CourseContent/CourseContent';
import { AuthProvider } from './context/AuthContext';
import Authenticate from './components/Auth/Authenticate';
import CourseQuiz from './components/CourseQuiz/CourseQuiz';
import Leaderboard from './components/Leaderboard/Leaderboard';
import './App.css';

function App() {


  return (
     <AuthProvider>     
      <BrowserRouter>
           <Navbar />

           <div className="app-layout">

           <div className='rankingMenu'>
             <Leaderboard />

           </div>
        
            <div className='mainContent'>

             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<Catalog />} />
              {/* Ruta dinámica usando :courseId */}
              <Route path="/cursos/:courseId" element={<CourseDetail />} />
              <Route path="/modules/:courseId" element={<CourseContent />} />
              <Route path="/login" element={<Authenticate />} />
              <Route path="/quiz/:courseId" element={<CourseQuiz />} />
              
              {/* Control de Ruta 404 Not Found */}
              <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px' }}><h2>404 - Página No Encontrada</h2></div>} />
            </Routes>

            </div>
           </div>
           
      </BrowserRouter>
      
     </AuthProvider>
  );
}

export default App;
