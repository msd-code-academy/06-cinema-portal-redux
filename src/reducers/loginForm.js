const initialState = {
  showLogin: false
};

const loginForm = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return {...state, showLogin: true};
    case 'CLOSE_LOGIN':
      return {...state, showLogin: false};
    default:
      return state;
  }
};

export default  loginForm;