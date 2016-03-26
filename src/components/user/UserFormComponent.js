import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import validator from 'validator'

import Input from '../../template/src/components/Input'
import Button from '../../template/src/components/Button'
import Control from '../../template/src/components/Control'

/**
* Validations
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
  //email validations
  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.email && !validator.isEmail(values.email)) {
    errors.email = 'Type a valid email address'
  }
  return errors
}

/**
* Component
**/

class UserFormComponent extends Component {

  render () {
    const { fields: { name, email, password, confirm_password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.changeUserData)}>
        <Input label="Name"
               type="text"
               showError={name.touched && name.error}
               is-danger={name.touched && name.error}
               {...name}/>

        <Input label="Email"
               type="email"
               showError={email.touched && email.error}
               is-danger={email.touched && email.error}
               {...email}/>

        <Control>
          <Button type="submit"
                  is-primary
                  is-loading={this.props.isLoading}
                  is-disabled={this.props.isLoading}>Update</Button>
        </Control>
      </form>
    )
  }
}

UserFormComponent = reduxForm({
  form: "user",
  fields: ['name', 'email'],
  validate
},
state => ({
  initialValues: state.user.data
}))(UserFormComponent)

export default UserFormComponent
