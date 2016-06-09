import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Input, Button, Control, Checkbox, Title } from 'bulma-react'

/**
* validations
**/

const validate = values => {
  const errors = {}
  //apikey validations
  if (!values.stripe_apikey) {
    errors.stripe_apikey = 'Required'
  }
  //secretkey validations
  if (!values.stripe_secretkey) {
    errors.stripe_secretkey = 'Required'
  }
  return errors
}

/**
* Component
**/

class PaymentFormComponent extends Component {
  render () {
    const { fields: { stripe_active, stripe_apikey, stripe_secretkey }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.insertPaymentSettings)}>

        <Title is-4>Strip</Title>

       <Input type="text"
              label="Api Key"
              placeholder="type the api key"
              showError={stripe_apikey.touched && stripe_apikey.error}
              is-danger={stripe_apikey.touched && stripe_apikey.error}
              {...stripe_apikey}/>

      <Input type="text"
             label="Secret Key"
             placeholder="type the secret key"
             showError={stripe_secretkey.touched && stripe_secretkey.error}
             is-danger={stripe_secretkey.touched && stripe_secretkey.error}
             {...stripe_secretkey}/>

      <Checkbox description="Active Stripe" {...stripe_active}/>

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
  fields: ['stripe_active', 'stripe_secretkey', 'stripe_apikey'],
  validate
},
state => ({
  initialValues: state.payment.data
}))(PaymentFormComponent)

export default PaymentFormComponent
