import React, { Component } from 'react'
import { Subtitle, Table } from 'bulma-react'

class CartTableComponent extends Component {
  render () {
    let emptyCartLabel = (!this.props.cartItems.length) ?
                         (<Subtitle is-4 is-text-centered>You shopping cart is empty :(</Subtitle>) :
                         ''
    return (
      <div>
        <Subtitle>
          Cart
        </Subtitle>
        <Table is-bordered>
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
                <td>${item.price * item.quantity}</td>
              </tr>
            )}
          </tbody>
        </Table>
        {emptyCartLabel}
      </div>
    )
  }
}

export default CartTableComponent
