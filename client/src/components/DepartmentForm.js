import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DepartmentForm extends Component {
  state = { name: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state }
    this.props.updateDepartment(department)
  }

  handleSubmit = (e, { name, value }) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState( {name: '' })
  }

  render() {
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Department"
        type="text"
        name="department"
        value={this.props.department}
        onChange={this.handleChange}
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
    )
  }
}

export default DepartmentForm;
