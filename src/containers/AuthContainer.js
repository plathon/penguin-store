import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticateUser } from '../actions/user'

import SignInPage from '../components/auth/SignInPage'

class AuthContainer extends Component {

  render(){
    return <SignInPage authenticateUser={this.props.authenticateUser}
                       userStartLogin={this.props.userStartLogin}/>
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { authenticateUser }, dispatch)
}

function mapStateToProps (state) {
  return { userStartLogin: state.user.start_login }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
