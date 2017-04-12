import axios from './../api/axios';

const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  user
});

export const login = (credentials) => {
  return (dispatch) => {
    return axios.post('/login', credentials).then(
      () => dispatch(loginSuccess(credentials)),
      (error) => console.error(error)
    );
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});
