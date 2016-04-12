import React from 'react'
import { Button, Icon } from 'bulma-react'

export default function SocialAuthButtons (props) {
  return (
    <div>
      <Button type="button"
              is-info
              is-fullwidth
              is-loading={props.isLoding}
              is-disabled={props.isLoding}
              onClick={props.authenticateUserWithFacebook}>
        <Icon icon="facebook"/>
        Login with Facebook
      </Button> <br/>

      <Button type="button"
              button
              is-primary
              is-fullwidth
              is-loading={props.isLoding}
              is-disabled={props.isLoding}
              onClick={props.authenticateUserWithTwitter}>
        <Icon icon="twitter"/>
        Login with Twitter
      </Button>
    </div>
  )
}
