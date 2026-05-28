import { initialState, questions_data } from "../data/questions";



export function quizReducer(state, action){

    switch (action.type) {      
      
        case 'SELECT_ANSWER':
            return {
                ...state,
                selectedAnswer: action.payload
            };
        case 'NEXT_QUESTION':
        {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            const isCorrect = state.selectedAnswer === currentQuestion.correctAnswer;
            const nextScore = isCorrect ? state.score + 1 : state.score;
            
            const isLastQuestion = state.currentQuestionIndex + 1 >= state.questions.length;
        
        return {
            ...state,
            score: nextScore,
            selectedAnswer: null, // Reseteamos la selección para la siguiente pregunta
            currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
            quizCompleted: isLastQuestion
        }
        }

        case 'RESET_QUIZ':
            return {
               questions: questions_data.filter(q => q.idCourse === action.payload),
                currentQuestionIndex: 0,
                selectedAnswer: null,
                score: 0,
                quizCompleted: false
            };
        default:
            throw new Error(`Acción no soportada: ${action.type}`);
    }
}