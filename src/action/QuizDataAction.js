export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
  };
};

