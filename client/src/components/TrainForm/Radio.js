import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
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
        <div key={name} className="mb-3">
          <Form.Check
            name="amt"
            type="radio"
            id={`radio-${name}`}
            label={label}
            value={name}
            onChange={this.radioChange}
          />
        </div>
      );
    })
  }
}

export default Radio;
