const userIdentity = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.user;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default  userIdentity;