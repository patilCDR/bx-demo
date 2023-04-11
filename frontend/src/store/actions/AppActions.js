export const btnLoader = value => dispatch => {
  dispatch({
    type: 'BTN_LOADING',
    payload: value,
  });
  return;
};
