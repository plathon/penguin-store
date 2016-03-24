import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import Input from '../../template/src/components/Input'
import Button from '../../template/src/components/Button'
import Control from '../../template/src/components/Control'

/**
* validations
**/

const validate = values => {
  const errors = {}
  //email validations
  if (!values.email) {
    errors.email = 'Required'
  }
  //token validations
  if (!values.token) {
    errors.token = 'Required'
  }
  //apikey validations
  if (!values.apikey) {
    errors.apikey = 'Required'
  }
  return errors
}

/**
* Component
**/

class PaymentFormComponent extends Component {
  render () {
    const { fields: { email, token, apikey }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.insertPaymentSettings)}>

        <Input type="text"
               label="Email"
               placeholder="type the registered email"
               showError={email.touched && email.error}
               is-danger={email.touched && email.error}
               {...email}/>

       <Input type="text"
              label="Token"
              placeholder="type the payment token"
              showError={token.touched && token.error}
              is-danger={token.touched && token.error}
              {...token}/>

      <Input type="text"
             label="Api Key"
             placeholder="type the payment token"
             showError={apikey.touched && apikey.error}
             is-danger={apikey.touched && apikey.error}
             {...apikey}/>

      <Control>
         <Button type="submit"
                 is-primary
                 is-loading={this.props.isLoading}
                 is-disabled={this.props.isLoading}
                 is-large>Save</Button>
       </Control>

      </form>
    )
  }

}

PaymentFormComponent = reduxForm({
  form: 'paymentSettings',
  fields: ['email', 'token', 'apikey'],
  validate
},
state => ({
  initialValues: state.payment.data
}))(PaymentFormComponent)

export default PaymentFormComponent
