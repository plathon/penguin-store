import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertProduct, updateProduct } from '../../actions/product'

import ProductManagePage from '../../components/product/ProductManagePageComponent'

class ProductManageContainer extends Component {
  render () {
    return <ProductManagePage isLoading={this.props.isLoading}
                              insertProduct={this.props.insertProduct}
                              updateProduct={this.props.updateProduct}
                              productIndex={this.props.params.product}
                              categories={this.props.categories}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertProduct, updateProduct }, dispatch )
}

function mapStateToProps (state) {
  return {
    isLoading: state.product.is_loading,
    categories: state.category.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManageContainer)
