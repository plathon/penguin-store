import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions/user'

import SignInPage from '../components/auth/SignInPage'

class AuthContainer extends Component {

  render(){
    return <SignInPage authenticateUser={this.props.authenticateUser}
                       isLoding={this.props.isLoding}/>
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { authenticateUser }, dispatch)
}

function mapStateToProps (state) {
  return { isLoding: state.user.is_loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
