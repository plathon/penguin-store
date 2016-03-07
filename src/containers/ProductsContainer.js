import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductsPage from '../components/product/ProductsPageComponent'

class ProductContainer extends Component {

  render () {
    return <ProductsPage products={this.props.products} />
  }

}

function mapStateToProps (state) {
  return { products: state.product.items }
}

export default connect(mapStateToProps, null)(ProductContainer)
