import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ProductConsumer } from '../providers/ProductProvider';


class ProductForm extends Component {
  state = { name: '', description: '', price: '', stock: '', image_link: '' }

  componentDidMount() {
    if (this.props.id) {
      this.setState({ name: this.props.name, description: this.props.description, 
        price: this.props.price, stock: this.props.stock, 
        image_link: this.props.image_link
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addProduct(this.state)
    this.props.updateProduct(this.state)
    this.setState( {name: '', description: '', price: '', stock: '', image_link: ''})
  }

  render() {
    const { name, description, price, stock, image_link } = this.state;
      return (
    <Form onSubmit={this.handleSubmit}>

      <Form.Input
        label="name"
        name="name"
        value={name}
        onChange={this.handleChange}
      />
      <Form.Input
        label="description"
        name="description"
        value={description}
        onChange={this.handleChange}
      />
      <Form.Input
        label="price"
        name="price"
        value={price}
        onChange={this.handleChange}
      />
      <Form.Input
        label="name"
        name="name"
        value={name}
        onChange={this.handleChange}
      />

      <Form.Input
        label="stock"
        name="stock"
        value={stock}
        onChange={this.handleChange}
      />

      <Form.Input
        label="image_link"
        name="image_link"
        value={image_link}
        onChange={this.handleChange}
      />

      <Form.Button color="blue">Save</Form.Button>
    </Form>
    )
  }
}

const ConnectedProductForm = (props) => {
  return (
  <ProductConsumer>
    { value => (
      <ProductForm
      { ...props }
      addProduct={value.addProduct}
      />
    )}
  </ProductConsumer>
  )
}

export default ConnectedProductForm;
