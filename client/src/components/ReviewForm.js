import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ReviewConsumer } from '../providers/ReviewProvider';

class ReviewForm extends Component {
  state = { title: '', body: '', author: '', rank: '', rating: '', date: '', image_link: ''}

  componentDidMount() {
    if (this.props.id) {
      this.setState({ title: this.props.title, body: this.props.body, 
                  rank: this.props.rank, author: this.props.author, rating: this.props.rating, 
                   date: this.props.date, image_link: this.props.image_link,         
      })
    }
  }

  handleChange = (e, { name, value, addReview, updateReview }) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = {...this.state}
    this.props.addReview(review)
    this.props.updateReview(this.state)
    this.setState({title: '', body: '', author: '', rank: '', rating: '', date: '', image_link: ''})
  }

  render() {
    const { title, body, author, rank, rating, date, image_link } = this.state;
      return (
    <Form onSubmit={this.handleSubmit}>

      <Form.Input
        required
        placeholder='Review Title'
        label="title"
        name="title"
        value={title}
        onChange={this.handleChange}
      />

      <Form.Input
        required
        placeholder='Alias'
        label="author"
        name="author"
        value={author}
        onChange={this.handleChange}
      />

      <Form.Input
        required
        placeholder='Feedback'
        label="body"
        name="body"
        value={body}
        onChange={this.handleChange}
      />

      <Form.Select 
          required
          placeholder='⭐⭐⭐⭐⭐'
          label='rating'
          name='rating'
          value={rating}
          onChange={this.handleChange}
          options={ratingOptions}
        />

      <Form.Input
        required
        placeholder='OCT/5/2019'
        label="date"
        name="date"
        value={date}
        onChange={this.handleChange}
      />

      <Form.Input
        required
        placeholder='Image Link'
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

const ratingOptions = [
  {key: '5', value:'5', text: '⭐⭐⭐⭐⭐'},
  {key: '4', value:'4', text: '⭐⭐⭐⭐'},
  {key: '3', value:'3', text: '⭐⭐⭐'},
  {key: '2', value:'2', text: '⭐⭐'},
  {key: '1', value:'1', text: '⭐'}
];

const ConnectedReviewForm = (props) => {
  return (
  <ReviewConsumer>
    { value => (
      <ReviewForm
      { ...props }
      addReview={value.addReview}
      />
    )}
  </ReviewConsumer>
  )
}

export default ConnectedReviewForm;