import React, {Component, PropTypes} from 'react';
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Input,
  Divider,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import BuyButton from './buttons/BuyButton';
import Price from './utils/Price';
import axios from './../api/axios';

class PurchasePage extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    // TODO 2: use mapStateToProps function from Redux to pass data into props instead of state
    this.state = {
      noOfTickets: 1,
      movie: null,
      isLoading: false
    };
  }

  componentDidMount () {
    this.setState({isLoading: true});

    const movieId = this.props.match.params.id;
    const onSuccess = (response) => {
      this.setState({movie: response.data, isLoading: false});
    };

    /*
     TODO 1: call Redux action instead of performing AJAX call directly in the component
     */
    axios.get(`movies/${movieId}`).then(onSuccess);
  }

  handleChange (e) {
    this.setState({noOfTickets: e.target.value});
  }

  handleBuy () {
    // TODO 3: call Redux action that calls REST API (POST /orders) to save order
    // then you can redirect to homepage by calling this.props.history.push('/');
  }

  getImageSrc () {
    const {movie} = this.state;

    if (movie) {
      return movie.image;
    }

    return 'https://react.semantic-ui.com/assets/images/wireframe/image.png';
  }

  getDescription () {
    const {movie} = this.state;

    if (movie) {
      return movie.description;
    }

    return (
      <Image
        src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
    );
  }

  render () {
    const {
      noOfTickets,
      isLoading,
      movie
    } = this.state;
    let loadingIndicator = null;

    if (isLoading) {
      loadingIndicator = (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <Container>
        <Header as='h2' attached='top'>
          {movie && movie.title ? movie.title : '...'}
        </Header>
        <Segment attached>
          {loadingIndicator}
          <Grid>
            <Grid.Column width={4}>
              <Image
                src={this.getImageSrc()} />
            </Grid.Column>
            <Grid.Column width={8}>
              {this.getDescription()}
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Input
                  value={noOfTickets}
                  onChange={this.handleChange}
                  size='mini'
                  action={<BuyButton onClick={this.handleBuy}/>}
                  type='number'
                />
              </div>
              <Divider hidden/>
              <div>
                <Price price={movie && movie.price ? movie.price : NaN}/>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

PurchasePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PurchasePage;
