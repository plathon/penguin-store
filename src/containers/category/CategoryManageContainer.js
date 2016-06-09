import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveCategories, insertCategory, removeCategory } from '../../actions/category'

import CategoryPage from '../../components/category/CategoryPageComponent'

class CategoryManageContainer extends Component {
  componentWillMount () {
    if (!Object.keys(this.props.categories).length) {
      this.props.retrieveCategories();
    }
  }

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
  return bindActionCreators( { insertCategory, removeCategory, retrieveCategories }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManageContainer)
