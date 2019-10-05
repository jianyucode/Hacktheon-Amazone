import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ProductForm extends Component {
  state = { name: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e, { name, value, addReview, updateReview }) => {
    e.preventDefault()
    this.props.addProduct(this.state)
    this.props.updateProduct(this.state)
    this.setState( {name: '' })
  }

  render() {
    const { review } = this.props;
      return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="New Review"
        type="text"
        name="review"
        value={review}
        onChange={this.handleChange}
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
    )
  }
}

export default ReviewForm;