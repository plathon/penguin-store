import React, { Component } from 'react'
import { Link } from 'react-router'

import Input from '../../template/src/components/Input'
import Button from '../../template/src/components/Button'

class ResetPasswordForm extends Component {

  render () {
    return (
      <form>
        <Input name="email"
               label="Email"
               placeholder="type your email address"/>
        <Button is-fullwidth is-primary>Send me reset password instructions</Button>
      </form>
    )
  }

}

export default ResetPasswordForm
