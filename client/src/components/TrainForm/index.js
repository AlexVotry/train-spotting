import React, { Component } from 'react';
import Radio from './Radio';
import { Form, Button } from 'react-bootstrap';
import _ from 'lodash';
import './style.css';

class TrainForm extends Component {
  state = {
    value: '',
    name: '',
    validate: ''
  };

  renderInputs() {
    return _.map(this.props.fields, ({name, label, value}) => {
      return (
        <Form.Group controlId={"validationCustom" + name} key={name}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={this.onImputChange}
            required
          />
          <Form.Control.Feedback type="invalid">please fill this out</Form.Control.Feedback>
        </Form.Group>
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
      name: event.target.name,
      validate: ''
    });

    let input = {value: this.state.value, name: this.state.name};
    this.props.onChange(input);
  }

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ validate: 'was-validated'})
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.props.onSubmit(this.state.input);
    }
  }

  render (){
    return (
      <Form
        noValidate
        onSubmit={this.onSubmit}
        className={'form ' + this.state.validate}
      >
        {this.renderInputs()}
        {this.renderRadio()}
        <Button className="btn" variant="info" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default TrainForm;
