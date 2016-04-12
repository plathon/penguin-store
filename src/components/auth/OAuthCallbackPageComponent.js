import React, { Component } from 'react'

class OAuthCallbackPageComponent extends Component {
  componentWillMount () {
    this.props.oauthCallback( this.props.provider, this.props.params )
  }

  render () {
    return <h1>redirecting...</h1>
  }
}

export default OAuthCallbackPageComponent
