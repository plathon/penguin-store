import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import validator from 'validator'

import Input from '../../template/src/components/Input'
import Button from '../../template/src/components/Button'
import Control from '../../template/src/components/Control'

import SocialAuthButtons from './SocialAuthButtons'

/**
* Validations
**/

const validate = values => {
  const errors = {}
  //email validations
  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.email && !validator.isEmail(values.email)) {
    errors.email = 'Type a valid email address'
  }
  //password validations
  if (!values.password) {
    errors.password = 'Required'
  }
  if (values.password && values.password.length < 3) {
    errors.password = 'very short password'
  }
  if (values.password && values.password.length > 45) {
    errors.password = 'very long password'
  }
  return errors
}

/**
* Component
**/

class SignInForm extends Component {

  render () {
    const { fields: { email, password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.authenticateUser)}>

        <Input type="text"
               label="Email"
               placeholder="Type your email address"
               showError={email.touched && email.error}
               is-danger={email.touched && email.error}
               {...email} />

        <Input type="password"
               label="Password"
               placeholder="Type your password"
               showError={password.touched && password.error}
               is-danger={password.touched && password.error}
               {...password} />

        <Control>
          <Button type="submit"
                  is-primary
                  is-disabled={this.props.isLoding}
                  is-loading={this.props.isLoding}>Enter</Button>

          <Link to="reset-password" className="is-pulled-right">Forgot Password</Link>
        </Control><br/>

      <SocialAuthButtons />

      </form>
    )
  }
}

SignInForm = reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate
})(SignInForm);

export default SignInForm;
