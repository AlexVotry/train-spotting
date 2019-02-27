import React, { Component } from 'react';
import numOfRoutes from '../../services/numOfRoutes';

class Different extends Component {
  state = { start: '', end: '', maxDist: '', showAnswer: false };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value, showAnswer: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(
      { numberOfRoutes: numOfRoutes(this.state.start,
        this.state.end, this.state.maxDist, this.props.db),
        showAnswer: true,
        start: '',
        end: '',
        stops: ''
      });
  }

  provideAnswer = () => {
    if (this.state.showAnswer) {
      return (
        <h3>{this.state.numberOfRoutes}</h3>
      );
    };
  }

  renderContent() {
    return this.props.db.map(route => {
      return (
        <div className="card blue-grey darken-1" key={route._id}>
        <div className="card-content white-text">
          <span className="card-title">{route.start} - {route.end}</span>
          <p>{route.distance}</p>
        </div>
      </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Find how many different routes are available within a given distance.</h1>
          <p> Enter the start point, finish point, and the maximum distance to get how many possible routes are available.</p>
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

            <label>
              Maximum distance:
              <input type="text" name="maxDist" value={this.state.maxDist} onChange={this.handleChange} />
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

export default Different;



// renderContent() {
//   return this.props.db.map(route => {
//     return (
//       <div className="card blue-grey darken-1" key={route._id}>
//       <div className="card-content white-text">
//       <span className="card-title">{route.start} - {route.end}</span>
//       <p>{route.distance}</p>
//       </div>
//       </div>
//     );
//   });
// }
//
// render() {
//   return (
//     <div style={{ textAlign: 'center' }}>
//     <h1>Different</h1>
//     <ul>
//     {this.renderContent()}
//     </ul>
//     </div>
//   )
// }
