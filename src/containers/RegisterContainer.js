import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../actions/user'

import SignUpPage from '../components/auth/SignUpPage'

class RegisterContainer extends Component {

  render(){
    return <SignUpPage registerUser={this.props.registerUser}
                       userStartRegister={this.props.userStartRegister}/>
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ registerUser }, dispatch)
}

function mapStateToProps(state){
  return { userStartRegister: state.user.start_register }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
