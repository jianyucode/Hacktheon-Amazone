import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DepartmentForm extends Component {
  state = { name: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e, { name, value, addDepartment, updateDepartment }) => {
    e.preventDefault()
    this.props.addDepartment(this.state)
    this.props.updateDepartment(this.state)
    this.setState( {name: '' })
  }

  render() {
    const { department } = this.props;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Department"
        type="text"
        name="department"
        value={department}
        onChange={this.handleChange}
      />
      <Form.Button color="pink">Save</Form.Button>
    </Form>
    )
  }
}

export default DepartmentForm;