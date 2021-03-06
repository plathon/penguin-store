import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions/user'

import TopBar from './layout/TopBarComponent'
import Footer from './layout/FooterComponent'

require('../styles/app.css')

class App extends Component {

  render () {
    return (
      <div>
        <TopBar logoutUser={this.props.logoutUser}
                user={this.props.user}/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch)
}

function mapStateToProps(state) {
  return { user: state.user.data }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
