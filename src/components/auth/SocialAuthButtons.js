import React from 'react'
import { Button, Icon } from 'bulma-react'

export default function SocialAuthButtons () {
  return (
    <div>
      <Button is-info is-fullwidth>
        <Icon icon="facebook"/>
        Login with Facebook
      </Button> <br/>

      <Button button is-primary is-fullwidth>
        <Icon icon="twitter"/>
        Login with Twitter
      </Button>
    </div>
  )
}
