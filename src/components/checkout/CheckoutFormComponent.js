import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Columns, Column, Button, Subtitle, Title } from 'bulma-react'

import CartTable from './CartTableComponent'

/**
* Validations
**/

const validate = values => {
  const errors = {}
  //address validations
  if (!values.address) {
    errors.address = 'Select a address to ship'
  }
  return errors
}

/**
* Component
**/

class CheckoutFormComponent extends Component {

  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (data) {
    let { addresses, cartItems, cartTotal } = this.props
    this.props.checkout(cartItems, addresses[ data.address ], cartTotal)
  }

  render () {
    const { fields: { address }, handleSubmit } = this.props
    var emptyAddressesLabel = (!this.props.addresses.length) ?
                              (<Subtitle is-4 is-text-centered>You don't have any shipping address :(</Subtitle>) :
                              ''
    return (
      <form onSubmit={handleSubmit(this.submit)}>

        <Columns>
          <Column is-10 is-offset-1>
            <Subtitle>
              Shipping Address
              <Link className="is-primary is-pulled-right" to="address">New address</Link>
            </Subtitle>
            <Table is-bordered>
              <thead>
                <tr>
                  <th></th>
                  <th>Address</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.addresses.map((address_data, i) =>
                  <tr key={i}>
                    <th>
                      <p className="control">
                        <label className="radio">
                          <input type="radio" {...address} value={i}/>
                        </label>
                      </p>
                    </th>
                    <td>
                      <strong>Name: </strong>{address_data.name} <strong>Phone: </strong>{address_data.phone}<br/>
                      {address_data.address_line_one}<br/>
                      {address_data.address_line_two}<br/>
                      {address_data.city}/{address_data.state}<br/>
                      {address_data.country}<br/>
                      {address_data.zip}
                    </td>
                    <td><h4 className="title is-5">$15</h4></td>
                  </tr>
                )}
              </tbody>
            </Table>
            {address.touched && address.error && <span className="is-danger">{address.error}</span>}
            {emptyAddressesLabel}
          </Column>
        </Columns>

        <Columns>
          <Column is-10 is-offset-1>
            <CartTable cartItems={this.props.cartItems}/>
          </Column>
        </Columns>

        <Columns>
          <Column is-10 is-offset-1>
            <Title>Total: ${this.props.cartTotal}</Title>
          </Column>
        </Columns>

        <Columns>
          <Column is-10 is-offset-1>
            <Button type="submit"
                    is-success
                    is-large
                    is-fullwidth
                    is-loading={this.props.isLoading}
                    is-disabled={this.props.isLoading ||
                                 !this.props.cartItems.length ||
                                 !this.props.addresses.length ||
                                 (address.touched && address.error)}>Checkout</Button>
          </Column>
        </Columns>

      </form>
    )
  }
}

CheckoutFormComponent = reduxForm({
  form: 'checkout',
  fields: ['address'],
  validate
})(CheckoutFormComponent)

export default CheckoutFormComponent
