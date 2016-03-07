import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import validator from 'validator'

import Input from '../../template/src/components/Input'
import Button from '../../template/src/components/Button'

import SocialAuthButtons from './SocialAuthButtons'

/**
* Validation
**/

const validate = values => {
  const errors = {}
  //name validations
  if (!values.name) {
    errors.name = 'Required'
  }
  if (values.name && values.name.length < 3) {
    errors.name = 'very short name'
  }
  if (values.name && values.name.length > 45) {
    errors.name = 'very long name'
  }
  //name validations
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

class SignUpForm extends Component {
  render () {
    const { fields: { name, email, password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.registerUser)}>

        <Input label="Name"
               placeholder="Type your full name"
               showError={name.touched && name.error}
               is-danger={name.touched && name.error}
               {...name}/>

             <Input type="email"
               label="Email"
               placeholder="Type your email address"
               showError={email.touched && email.error}
               is-danger={email.touched && email.error}
               {...email}/>

        <Input type="password"
               label="Password"
               placeholder="Type a hard password"
               showError={password.touched && password.error}
               is-danger={password.touched && password.error}
               {...password}/>

        <Button type="submit"
                is-primary
                is-disabled={this.props.userStartRegister}
                is-loading={this.props.userStartRegister}>Register</Button>

        <br/><br/>

        <SocialAuthButtons />

      </form>
    )
  }
}

SignUpForm = reduxForm({
  form: 'signup',
  fields: ['name', 'email', 'password'],
  validate
})(SignUpForm)

export default SignUpForm
