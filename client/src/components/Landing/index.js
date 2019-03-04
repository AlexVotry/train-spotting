import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import Distance from '../Distance';
import Shortest from '../Shortest';
import Different from '../Different';
import Trips from '../Trips';
import Welcome from '../Welcome';

class Landing extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" render={(props) => <Welcome db={this.props.train} /> } />
          <Route exact path="/distance" render={(props) => <Distance db={this.props.train} /> } />
          <Route exact path="/different" render={(props) => <Different db={this.props.train} /> } />
          <Route exact path="/shortest" render={(props) => <Shortest db={this.props.train} /> } />
          <Route exact path="/trips" render={(props) => <Trips db={this.props.train} /> } />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ train }) {
  return { train };
}

export default connect(mapStateToProps)(Landing);
