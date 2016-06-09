import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeUserData, updateUserPassword } from '../../actions/user'

import UserPage from '../../components/user/UserPageComponent'

class UserContainer extends Component {
  render () {
    return <UserPage user={this.props.authData}
                     changeUserData={this.props.changeUserData}
                     updateUserPassword={this.props.updateUserPassword}
                     isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return { isLoading: state.user.is_loading }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { changeUserData, updateUserPassword }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
