import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
    state = { products: [] };

    getProducts = (department_id) => {
            axios.get(`/api/department/${department_id}/products`)
            .then( res => {
                this.setState({ products: res.data })
            })
            .catch( err => {
                console.log(err)
            })
 
    }


addProduct = (department_id, product) => {
    axios.post(`/api/department/${department_id}/products`, {product})
    .then( res => {
        const { products } = this.state
        this.setState({ products: [...products, res.data] })
    })
    .catch( err => {
        console.log(err)
    })
}

updateProduct = (department_id, product) => {
    axios.put(`/api/department/${department_id}/products/${product.id}`, { product } )
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

  deleteProduct = (department_id, id) => {
      axios.delete(`/api/department/${department_id}/products/${id}`)
      .then( res => {
          const { products } = this.state
          this.setState({ products: products.filter( i => i.id !== id) }) 
      })
  }

render() {
    return(
        <ProductContext.Provider value={{
            ...this.state,
            getProducts: this.getProducts,
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