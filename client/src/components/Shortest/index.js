import React, { Component } from 'react';
import shortest from '../../services/shortest';


class Shortest extends Component {
  state = { start: '', end: '', distance: 0, showAnswer: false };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value, showAnswer: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      { distance: shortest.dist(this.state.start,
        this.state.end, this.props.db),
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
          {this.provideAnswer()}
        </div>
      </div>
    )
  }
}

export default Shortest;
