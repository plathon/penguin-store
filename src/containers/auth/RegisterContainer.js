import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser,
         authenticateUserWithFacebook,
         authenticateUserWithTwitter } from '../../actions/user'

import SignUpPage from '../../components/auth/SignUpPage'

class RegisterContainer extends Component {

  render(){
    return <SignUpPage registerUser={this.props.registerUser}
                       authenticateUserWithFacebook={this.props.authenticateUserWithFacebook}
                       authenticateUserWithTwitter={this.props.authenticateUserWithTwitter}
                       isLoding={this.props.isLoding}/>
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    registerUser,
    authenticateUserWithFacebook,
    authenticateUserWithTwitter
  }, dispatch)
}

function mapStateToProps(state){
  return { isLoding: state.user.is_loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
