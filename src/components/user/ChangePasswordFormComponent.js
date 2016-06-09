import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Button, Control } from 'bulma-react'

const validate = values => {
  const errors = {}
  //current password validations
  if (values.current_password && values.current_password.length < 3) {
    errors.current_password = 'very short password'
  }
  if (values.current_password && values.current_password.length > 45) {
    errors.current_password = 'very long password'
  }
  //password validations
  if (values.password && values.password.length < 3) {
    errors.password = 'very short password'
  }
  if (values.password && values.password.length > 45) {
    errors.password = 'very long password'
  }
  //confirm password validations
  if (values.password && values.password !== values.confirm_password) {
    errors.confirm_password = 'password and confirm password not match'
  }
  return errors
}

class ChangePasswordFormComponent extends Component {
  render () {
    const { fields: { current_password, password, confirm_password }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.updateUserPassword)}>

        <label className="label">Password</label>

        <Control is-horizontal>

          <input type="password"
                 className="input"
                 placeholder="Type your current password"
                 {...current_password}/>

          <input type="password"
                 className="input"
                 placeholder="Type new password"
                 {...password}/>

          <input type="password"
                 className="input"
                 placeholder="Type new password again"
                 {...confirm_password}/>

        </Control>

        {current_password.touched && current_password.error && <span className="is-danger">{current_password.error}</span>}
        {password.touched && password.error && <span className="is-danger">{password.error}</span>}
        {confirm_password.touched && confirm_password.error && <div className="is-danger">{confirm_password.error}</div>}

        <Control>
          <Button type="submit"
                  is-primary
                  is-loading={this.props.isLoading}
                  is-disabled={this.props.isLoading}>Change Password</Button>
        </Control>

      </form>
    )
  }
}

ChangePasswordFormComponent = reduxForm({
  form: 'changePassword',
  fields: ['current_password', 'password', 'confirm_password'],
  validate
})(ChangePasswordFormComponent)

export default ChangePasswordFormComponent
