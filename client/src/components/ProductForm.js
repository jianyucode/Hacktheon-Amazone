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
    const { product } = this.props;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Product"
        type="text"
        name="product"
        value={product}
        onChange={this.handleChange}
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
    )
  }
}

export default ProductForm;