import React, { Component } from 'react'

class CartTableComponent extends Component {
  render () {
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
                <td>${item.price * item.quantity}</td>
              </tr>
            )}
          </tbody>
        </table>
        {emptyCartLabel}
      </div>
    )
  }
}

export default CartTableComponent
