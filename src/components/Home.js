import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/user'
import { searchProducts } from '../actions/product'

import TopBarHome from './layout/TopBarHomeComponent'
import Footer from './layout/FooterComponent'

require('../styles/app.css')

class Home extends Component {

  render () {
    return (
      <div>
        <TopBarHome logoutUser={this.props.logoutUser}
                    user={this.props.user}
                    categories={this.props.categories}
                    searchProducts={this.props.searchProducts}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser, searchProducts }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
    categories: state.category.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
