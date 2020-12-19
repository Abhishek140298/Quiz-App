import axios from 'axios';

const URL = 'http://127.0.0.1:5500/src/data/QuizData.json';

export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
  };
};

export const getQuizData = () => {
  return (dispatch) => {
    dispatch({ type: 'IS_QUIZ_LOADING' });
    axios.get(URL).then((res) => {
      if (res.status === 200) {
        dispatch({ type: 'ON_SUCCESS_QUIZ_DATA', payload: res.data });
      }
    });
  };
};
