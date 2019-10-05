import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ProductForm extends Component {
  state = { name: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e, { name, value, addProduct, updateProduct }) => {
    e.preventDefault()
    this.props.addProduct(this.state)
    this.props.updateProduct(this.state)
    this.setState( {name: '' })
  }

  render() {
    const { name, price, description } = this.props;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Product"
        placeholder="Add New Product"
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
      />

    <Form.Input onSubmit={this.handleChange}
        name='price'
        placeholder='Add Price'
        value={price}
        required/>

    <Form.Input onSubmit={this.handleChange}
        name='description'
        placeholder='Add Description'
        value={description}
        required/>

      <Form.Button color="blue">Save</Form.Button>
    </Form>
    )
  }
}

export default ProductForm;