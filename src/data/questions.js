


export const questions_data = [
  {
    id: 1,
    idCourse:"react-avanzado",
    question: "¿Qué es React?",
    options: ["Una base de datos", "Una librería de JavaScript", "Un sistema operativo", "Un lenguaje de programación"],
    correctAnswer: 1 // Índice de la respuesta correcta
  },
  {
    id: 2,    
    idCourse:"react-avanzado",
    question: "¿Para qué sirve el hook useEffect?",
    options: ["Para manejar efectos secundarios", "Para renderizar HTML", "Para estilos CSS", "Para crear rutas"],
    correctAnswer: 0
  },
  {
    id: 3,    
    idCourse:"sql-srv",
    question: "¿Que es una tabla?",
    options: ["Un objeto de BD", "Para renderizar HTML", "Para estilos CSS", "Para crear rutas"],
    correctAnswer: 0
  },
  {
    id: 4,    
    idCourse:"sql-srv",
    question: "¿Que es un SP?",
    options: ["Es un bloque de código SQL reutilizable", "Para renderizar HTML", "Para estilos CSS", "Para crear rutas"],
    correctAnswer: 0
  }
];

// El estado inicial de nuestro quiz
export const initialState = {
  questions: questions_data,
  currentQuestionIndex: 0,
  selectedAnswer: null, // Índice de la respuesta que el usuario clickea
  score: 0,
  quizCompleted: false
};


// Función para inicializar el estado de manera dinámica
export const initQuizState = (courseId) => {
  // Filtramos las preguntas globales por el curso actual
  const filteredQuestions = questions_data.filter(q => q.idCourse === courseId);
  
  return {
    ...initialState,
    questions: filteredQuestions // Reemplazamos las preguntas con las filtradas
  };
};