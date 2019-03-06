import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../Header';
import Distance from '../Distance';
import Shortest from '../Shortest';
import Different from '../Different';
import Trips from '../Trips';
import Welcome from '../Welcome';

class App extends Component {

  componentDidMount() {
    this.props.fetchTrains();
  }

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/distance" component={Distance} />
          <Route exact path="/different" component={Different} />
          <Route exact path="/shortest" component={Shortest} />
          <Route exact path="/trips" component={Trips} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
