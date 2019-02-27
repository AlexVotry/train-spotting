import React, { Component } from 'react';
import shortest from '../../services/shortest';


class Shortest extends Component {
  state = { start: '', end: '', distance: 0, route: '', showAnswer: false };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value, showAnswer: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    const result = shortest.dist(this.state.start,
      this.state.end, this.props.db);
    this.setState(
      { distance: result.distance,
        route: result.route,
        showAnswer: true,
        start: '',
        end: '',
      });
  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>{this.state.distance}</h3>
      );
    };
  }

  renderContent() {
    return (
      <div className="card blue-grey darken-1" key={this.state.route}>
      <div className="card-content white-text">
        <span className="card-title">Route: {this.state.route}</span>
        <p>Distance: {this.state.distance}</p>
      </div>
    </div>
    );
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find the shortest distance.</h1>
          <p> Enter the start point, and the finish point, to what the shortest distance is.</p>
        </div>
        <div className="row">
          <form className="col s6" onSubmit={this.handleSubmit}>
            <label>
              Start:
              <input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
            </label>

            <label>
              End:
              <input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
            </label>

              <input className="red-text" type="submit" value="Submit" />
          </form>
        </div>

        <div className="col s6">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Shortest;
