import rootReducer from './rootReducer';

describe('reducers', function () {
  describe('userIdentity', function () {
    it('LOGIN_SUCCESS', () => {
      const state = rootReducer({
        login: {
          user: null,
          showLoginForm: true,
          loginError: ''
        }
      }, {
        type: 'LOGIN_SUCCESS',
        user: {username: 'john', password: 'abc'}
      });
      expect(state).toEqual({
        login: {
          loginError: '',
          showLoginForm: false,
          user: {
            username: 'john',
            password: 'abc'
          }
        }
      });
    });

    it('LOGIN_FAIL', function () {
      const state = rootReducer({
        login: {
          user: null,
          showLoginForm: true,
          loginError: ''
        }
      }, {
        type: 'LOGIN_FAIL',
        error: {}
      });
      expect(state).toEqual({
        login: {
          user: null,
          showLoginForm: true,
          loginError: 'Login attempt failed.'
        }
      });
    });

    it('SHOW_LOGIN_FORM', function () {
      const state = rootReducer({
        login: {
          user: null,
          showLoginForm: false,
          loginError: ''
        }
      }, {type: 'SHOW_LOGIN_FORM'});
      expect(state).toEqual({
        login: {
          user: null,
          showLoginForm: true,
          loginError: ''
        }
      });
    });

    it('CLOSE_LOGIN_FORM', function () {
      const state = rootReducer({
        login: {
          user: null,
          showLoginForm: true,
          loginError: 'Login attempt failed.'
        }
      }, {type: 'CLOSE_LOGIN_FORM'});
      expect(state).toEqual({
        login: {
          user: null,
          showLoginForm: false,
          loginError: ''
        }
      });
    });
  });
});
