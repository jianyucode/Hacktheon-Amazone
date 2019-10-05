import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
    state = { products: [] };

    componentDidMount(){
        axios.get(`/api/department/${this.props.match.params.id}/products`)
        .then( res => {
            this.setState({ products: res.data })
        })
        .catch( err => {
            console.log(err)
        })
    }


addProduct = (product) => {
    axios.post(`/api/department/${this.props.match.params.id}/products`, {product})
    .then( res => {
        const { products } = this.state
        this.setState({ products: [...products, res.data] })
    })
    .catch( err => {
        console.log(err)
    })
}

updateProduct = (id, Product) => {
    axios.put(`/api/department/${this.props.match.params.id}/products/${id}`, { Product } )
    .then( res => {
        const products = this.state.products.map( i => {
            if (i.id === id)
                return res.data
            return i
        })
        this.setState({ products })
    })
    .catch( err => {
        console.log(err)
      })
  }

  deleteProduct = (id) => {
      axios.delete(`/api/department/${this.props.match.params.id}/products/${id}`)
      .then( res => {
          const { products } = this.state
          this.setState({ product: products.filter( i => i.id !== id) }) 
      })
  }

render() {
    return(
        <ProductContext.Provider value={{
            ...this.state,
            addProduct: this.addProduct,
            updateProduct: this.updateProduct,
            deleteProduct: this.deleteProduct
        }}>
        {this.props.children}
        </ProductContext.Provider>
    )
}
}

export default ProductProvider;