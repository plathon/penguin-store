import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertCategory, removeCategory } from '../../actions/category'

import CategoryPage from '../../components/category/CategoryPageComponent'

class CategoryManageContainer extends Component {
  render () {
    return (
      <CategoryPage categories={this.props.categories}
                    isLoading={this.props.isLoading}
                    insertCategory={this.props.insertCategory}
                    removeCategory={this.props.removeCategory}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.category.items,
    isLoading: state.category.is_loading
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertCategory, removeCategory }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManageContainer)
