import { connect } from 'react-redux';
import { login, logout } from '../actions/login';
import Root from './../components/Root';

const mapStateToProps = (state) => ({
  user: state.userIdentity
});

const mapDispatchToProps = {
  onLogin: login,
  onLogOut: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
