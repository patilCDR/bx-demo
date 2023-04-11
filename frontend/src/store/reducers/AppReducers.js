export default (state = {}, action) => {
  switch (action.type) {
    case 'BTN_LOADING':
      return {
        ...state,
        btnLoading: action.payload,
      };

    default:
      return state;
  }
};
