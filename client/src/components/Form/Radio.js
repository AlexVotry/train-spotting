import React, { Component } from 'react';
import _ from 'lodash';

class Radio extends Component {
  state = { name: 'amt', value: 'max'};

  radioChange = async (event) => {
    await this.setState({
      value: event.target.value,
      name: event.target.name
    });

    let input = {value: this.state.value, name: this.state.name};
    this.props.onChange(input);
  }

  render() {
    return _.map(this.props.radio, ({name, label}) => {
      return (
        <p key={name}>
        <label>
        <input name="amt" value={name} type="radio" onChange={this.radioChange} />
        <span>{label}</span>
        </label>
        </p>
      );
    })
  }
}


export default Radio;
