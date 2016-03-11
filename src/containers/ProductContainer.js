import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProduct } from '../actions/product'

import ProductPage from '../components/product/ProductPageComponent'

class ProductComponent extends Component {
  render () {
    return (
      <ProductPage product={this.props.product}
                   productIndex={this.props.params.product}
                   loadProduct={this.props.loadProduct}/>
    )
  }
}

function mapStateToProps (state) {
  return { product: state.product.data }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { loadProduct }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)
