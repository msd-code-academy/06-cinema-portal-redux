import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showLogin, closeLogin } from '../actions/login';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Menu, Button} from 'semantic-ui-react';
import LoginDialog from './../components/LoginDialog';
import MovieList from './../components/MovieList';
import Checkout from './../components/Checkout';
import PurchasePage from './../components/PurchasePage';
import './App.css';

class App extends Component {
  getMenuItem(path, label, isHeader = false) {
    return ({match}) => {
      return (
        <Link to={path}>
          <Menu.Item
            header={isHeader}
            as='div'
            active={Boolean(match)}
          >{label}</Menu.Item></Link>
      );
    };
  }

  renderLoginButton () {
    return (
      <Button primary onClick={this.props.onLoginShow}>Login</Button>
    );
  }

  renderUserInfo () {
    return null;
  }

  render() {
    const {
      user,
      showLogin,
      onCloseLogin
    } = this.props;

    return (
      <Router>
        <div>
          {showLogin && <LoginDialog onClose={onCloseLogin} />}
          <Menu>
            <Route
              exact
              path='/'
              children={this.getMenuItem('/', 'BIO EAR cinema', true)}
            />
            <Route
              path='/checkout'
              children={this.getMenuItem('/checkout', 'Checkout')}
            />
            <Menu.Item position='right'>{user ? this.renderUserInfo() : this.renderLoginButton()}</Menu.Item>
          </Menu>
          <Route exact path='/' component={MovieList}/>
          <Route path='/checkout' render={(props) => <Checkout user={this.state.user} />} />
          <Route path='/movie/:id/buy' component={PurchasePage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userIdentity,
  showLogin: state.loginForm.showLogin
});

const mapDispatchToProps = {
  onLoginShow: showLogin,
  onCloseLogin: closeLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
