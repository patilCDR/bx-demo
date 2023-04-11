export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_ACTION':
      return {
        ...state,
        authDetails: action.payload,
      };

    default:
      return state;
  }
};
