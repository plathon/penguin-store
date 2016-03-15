import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Button from '../../template/src/components/Button'

class CheckoutPageComponent extends Component {

  constructor (props) {
    super(props)
    this.renderAddressesList = this.renderAddressesList.bind(this)
    this.renderCartItemsList = this.renderCartItemsList.bind(this)
  }

  renderAddressesList () {
    let emptyAddressesLabel = (!this.props.addresses.length) ?
                              (<h1 className="subtitle is-4 is-text-centered">You don't have any shipping address :(</h1>) :
                              ''
    return (
      <div>
        <h1 className="subtitle">
          Shipping Address
          <Link className="is-primary is-pulled-right" to="address">New address</Link>
        </h1>
        <table className="table is-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.addresses.map((address, i) =>
              <tr key={i}>
                <th>
                  <p className="control">
                    <label className="radio">
                      <input type="radio" name="question"/>
                    </label>
                  </p>
                </th>
                <td>
                  <strong>Name: </strong>{address.name} <strong>Phone: </strong>{address.phone}<br/>
                  {address.address_line_one}<br/>
                  {address.address_line_two}<br/>
                  {address.city}/{address.state}<br/>
                  {address.country}<br/>
                  {address.zip}
                </td>
                <td><h4 className="title is-5">$15</h4></td>
              </tr>
            )}
          </tbody>
        </table>
        {emptyAddressesLabel}
      </div>
    )
  }

  renderCartItemsList () {
    let emptyCartLabel = (!this.props.cartItems.length) ?
                         (<h1 className="subtitle is-4 is-text-centered">You shopping cart is empty :(</h1>) :
                         ''
    return (
      <div>
        <h1 className="subtitle">
          Cart
        </h1>
        <table className="table is-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>$200</td>
              </tr>
            )}
          </tbody>
        </table>
        {emptyCartLabel}
      </div>
    )
  }

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title is-text-centered">
                Checkout
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              {this.renderAddressesList()}
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              {this.renderCartItemsList()}
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <h3 className="title">Total: ${this.props.cartTotal}</h3>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <Button type="button"
                      is-success
                      is-large
                      is-fullwidth
                      is-loading={this.props.isLoading}
                      is-disabled={this.props.isLoading}
                      onClick={this.props.checkout.bind(this, this.props.cartItems, {})}>Checkout</Button>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default CheckoutPageComponent
