const INTIAL_STATE = {
  isLoading: false,
  quizData: [],
};

export default function quizDataReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ON_SUCCESS_QUIZ_DATA':
      return { ...state, quizData: action.payload, isLoading: true };
    default:
      return state;
  }
}
