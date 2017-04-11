import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Menu, Button} from 'semantic-ui-react';
import MovieList from './MovieList';
import Checkout from './Checkout';
import PurchasePage from './PurchasePage';
import './App.css';
import axios from './api/axios';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount () {
    /*
      TODO this login mechanism looks weird, try to implement login form
     */
    const payload = {
      username: 'john',
      password: 'abc'
    };

    axios.post('/login', payload).then(
      (response) => this.setState({user: payload})
    );
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

  render() {
    return (
      <Router>
        <div>
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
            <Menu.Item position='right'><Button primary>Login</Button></Menu.Item>
          </Menu>
          <Route exact path='/' component={MovieList}/>
          <Route path='/checkout' render={(props) => <Checkout user={this.state.user} />} />
          <Route path='/movie/:id/buy' component={PurchasePage} />
        </div>
      </Router>
    );
  }
}

export default App;
