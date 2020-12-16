const INTIAL_STATE = {
  isLoading: false,
  quizData: [],
};

export default function quizDataReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
