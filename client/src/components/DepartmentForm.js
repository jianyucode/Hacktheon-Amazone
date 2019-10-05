import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DepartmentConsumer } from '../providers/DepartmentProvider';

class DepartmentForm extends Component {
  state = { name: '' }

  handleChange = (e, { name, value, addDepartment, updateDepartment }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    const department = { ...this.state }
    this.props.addDepartment(department)
    this.setState( {name: '' })
  }

  render() {
    const { department } = this.props;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Department"
        type="text"
        name="title"
        value={department}
        onChange={this.handleChange}
      />
      <Form.Button color="pink">Save</Form.Button>
    </Form>
    )
  }
}

const ConnectedDepartmentForm = (props) => {
  return (
  <DepartmentConsumer>
    { value => (
      <DepartmentForm
      { ...props }
      addDepartment={value.addDepartment}
      />
    )}
  </DepartmentConsumer>
  )
}

export default ConnectedDepartmentForm;