import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertProductToCart } from '../../actions/cart'
import { removeProduct, retrieveProducts, searchProducts, loadMoreProducts } from '../../actions/product'
import { retrieveCategories } from '../../actions/category'

import ProductsPage from '../../components/product/ProductsPageComponent'

class ProductsContainer extends Component {
  componentWillMount () {
    if (!this.props.products.length)
      this.props.retrieveProducts()
    if (!this.props.categories.length)
      this.props.retrieveCategories()
  }

  render () {
    return <ProductsPage products={this.props.products}
                         insertProductToCart={this.props.insertProductToCart}
                         searchProducts={this.props.searchProducts}
                         searchCriteria={this.props.searchCriteria}
                         removeProduct={this.props.removeProduct}
                         loadMoreProducts={this.props.loadMoreProducts}
                         isLoading={this.props.isLoading}
                         limit={this.props.limit}
                         offset={this.props.offset}
                         userIsAdmin={(this.props.userType == "admin")}/>
  }
}

function mapStateToProps (state) {
  return {
    categories: state.category.items,
    products: state.product.items,
    searchCriteria: state.product.search,
    userType: state.user.data.type,
    isLoading: state.product.is_loading,
    limit: state.product.limit,
    offset: state.product.offset
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( {
    insertProductToCart,
    removeProduct,
    retrieveProducts,
    retrieveCategories,
    searchProducts,
    loadMoreProducts }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
