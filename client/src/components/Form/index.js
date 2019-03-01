import React, { Component } from 'react';
import Radio from './Radio';
import _ from 'lodash';

class Form extends Component {
  state = {
    value: '',
    name: ''
  };

  renderInputs() {
    return _.map(this.props.fields, ({name, label, value}) => {
      return (
        <label key={name}>
        {label}
        <input type="text" name={name} value={value} onChange={this.onImputChange} />
        </label>
      );
    });
  }

  renderRadio() {
    if (this.props.radio) {
      return (
        <Radio radio={this.props.radio} onChange={this.onRadioChange}/>
      )
    }
  }

  onRadioChange = input => {
    this.props.onChange(input);
  }

  onImputChange = async event => {
    await this.setState({
      value: event.target.value,
      name: event.target.name
    });

    let input = {value: this.state.value, name: this.state.name};
    this.props.onChange(input);
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render (){
    return (
      <form onSubmit={this.onSubmit}>
        {this.renderInputs()}
        {this.renderRadio()}
        <input className="red-text" type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
