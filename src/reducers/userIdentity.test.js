import rootReducer from './rootReducer';

describe('reducers', function () {
  describe('userIdentity', function () {
    it('LOGIN_SUCCESS', () => {
      let state;
      state = rootReducer({userIdentity: null}, {
        type: 'LOGIN_SUCCESS',
        user: {username: 'john', password: 'abc'}
      });
      expect(state).toEqual({userIdentity: {username: 'john', password: 'abc'}});
    });
  });
});