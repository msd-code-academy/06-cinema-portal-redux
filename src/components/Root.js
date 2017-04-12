import React, {Component} from 'react';
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

class Root extends Component {
  constructor (props) {
    super(props);

    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {showLogin: false};
  }

  handleShowLogin () {
    this.setState({showLogin: true});
  }

  handleCloseLogin () {
    this.setState({showLogin: false});
  }

  handleLogin (credentials) {
    this.setState({showLogin: false});

    this.props.onLogin(credentials);
  }

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
      <Button primary onClick={this.handleShowLogin}>Login</Button>
    );
  }

  renderUserInfo () {
    return (
      <span>
        <span>{this.props.user.username}</span>
        <em
          style={{cursor: 'pointer', marginLeft: '5px', display: 'inline-block'}}
          onClick={this.props.onLogOut}
        >(logout)</em>
      </span>
    );
  }

  render() {
    const {
      user
    } = this.props;
    const {
      showLogin
    } = this.state;

    return (
      <Router>
        <div>
          {showLogin && <LoginDialog onClose={this.handleCloseLogin} onSubmit={this.handleLogin} />}
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

export default Root;