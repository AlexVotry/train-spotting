import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Landing from '../Landing';

class App extends Component {

  componentDidMount() {
    this.props.fetchTrains();
  }

  render() {
    return (
      <div className="container">
        <Landing />
      </div>
    );
  }
}

export default connect(null, actions)(App);
