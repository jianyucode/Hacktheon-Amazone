import React, { Component } from 'react';
import axios from 'axios';

const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer;

class ReviewProvider extends Component {
    state = { reviews: [] };

    getReviews = (product_id) => {
            axios.get(`/api/product/${product_id}/reviews`)
            .then( res => {
                this.setState({ reviews: res.data })
            })
            .catch( err => {
                console.log(err)
            })
 
    }


addReview = (product_id, review) => {
    axios.post(`/api/product/${product_id}/reviews`, {review})
    .then( res => {
        const { reviews } = this.state
        this.setState({ reviews: [...reviews, res.data] })
    })
    .catch( err => {
        console.log(err)
    })
}

updateReview = (product_id, review) => {
    axios.put(`/api/product/${product_id}/reviews/${review.id}`, { review } )
    .then( res => {
        const reviews = this.state.reviews.map( i => {
            if (i.id === id)
                return res.data
            return i
        })
        this.setState({ reviews })
    })
    .catch( err => {
        console.log(err)
      })
  }

  deleteReview = (product_id, id) => {
      axios.delete(`/api/product/${product_id}/reviews/${id}`)
      .then( res => {
          const { reviews } = this.state
          this.setState({ reviews: reviews.filter( i => i.id !== id) }) 
      })
  }

render() {
    return(
        <ReviewContext.Provider value={{
            ...this.state,
            getReviews: this.getReviews,
            addReview: this.addReview,
            updateReview: this.updateReview,
            deleteReview: this.deleteReview
        }}>
        {this.props.children}
        </ReviewContext.Provider>
    )
}
}

export default ReviewProvider; 