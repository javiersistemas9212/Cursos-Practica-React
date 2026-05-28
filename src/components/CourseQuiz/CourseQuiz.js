import { useEffect, useReducer } from "react";
import { quizReducer } from "../../hooks/quizReducer";
import { initialState, initQuizState, questions_data } from "../../data/questions";
import './CourseQuiz.css'; 
import { useParams } from "react-router-dom";




export default function CourseQuiz (){

    const { courseId } = useParams();
    const [ state, dispatch ] = useReducer(quizReducer, initialState, initQuizState);
    const { questions, currentQuestionIndex, selectedAnswer, score, quizCompleted } = state;

// 3. EFECTO CLAVE: Si el usuario cambia de curso sin desmontar el componente,
  // reiniciamos el estado con las preguntas del nuevo curso.
  useEffect(() => {
    dispatch({ type: 'RESET_QUIZ', payload: courseId });
  }, [courseId]);


    if (quizCompleted) {
    return (
      <div className="quiz-container completed">
        <h2>¡Quiz Finalizado!</h2>
        <p>Tu puntuación es: <strong>{score} / {questions.length}</strong></p>
        <button onClick={() => dispatch({ type: 'RESET_QUIZ' })}>
          Reiniciar Quiz
        </button>
      </div>
    );
  }    
    
  const currentQuestion = questions[currentQuestionIndex];

    if (!quizCompleted && !currentQuestion) {
    return (
        <div className="quiz-container">
        <p>Cargando preguntas del curso...</p>
        </div>
    );
    }

  return (
    <div className="quiz-container">
      <h3>Pregunta {currentQuestionIndex + 1} de {questions.length}</h3>
      <p className="question-text">{currentQuestion.question}</p>

      <div className="options-list">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => dispatch({ type: 'SELECT_ANSWER', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="quiz-actions">
        <button
          className="next-btn"
          disabled={selectedAnswer === null} // No avanza si no ha respondido
          onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finalizar Quiz' : 'Siguiente Pregunta'}
        </button>
      </div>
    </div>
  );


}