import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import { DepartmentConsumer } from '../providers/DepartmentProvider';



class DepartmentForm extends Component {

  state = { title: '' }

  handleChange = (e, { name, value, addDepartment, updateDepartment }) => this.setState({ [name]: value })


  handleSubmit = (e) => {
    e.preventDefault()
    const department = { ...this.state }
    this.props.addDepartment(department)
    this.setState({ title: '' })

  }

  render(){
    const { title } = this.state;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Department"
        type="text"
        name="title"
        value={title}

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