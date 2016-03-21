import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertProductToCart } from '../actions/cart'
import { removeProduct } from '../actions/product'

import ProductsPage from '../components/product/ProductsPageComponent'

class ProductsContainer extends Component {

  render () {
    return <ProductsPage products={this.props.products}
                         insertProductToCart={this.props.insertProductToCart}
                         removeProduct={this.props.removeProduct}/>
  }

}

function mapStateToProps (state) {
  return { products: state.product.items }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertProductToCart, removeProduct }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
