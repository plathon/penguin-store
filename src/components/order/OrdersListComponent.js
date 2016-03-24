import React, { Component } from 'react'

import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

class OrdersListComponent extends Component {

  renderEmptyLabel (orders) {
    if (!orders.length)
      return <h1 className="subtitle is-4 is-text-centered">You don't have any order yet :(</h1>
  }

  render () {
    return (
      <div>
        {this.props.orders.map((order, orderIndex) =>
          <div key={orderIndex}>
            <Columns>
              <Column is-10 is-offset-1>
                <h3 className="subtitle is-3 is-text-centered">25/12/2012 00:05:23</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product, productIndex) =>
                      <tr key={productIndex}>
                        <th>{product.name}</th>
                        <th>${product.price}</th>
                        <th>{product.quantity}</th>
                        <th>${product.price * product.quantity}</th>
                      </tr>
                    )}
                  </tbody>
                </table>
              </Column>
            </Columns>

            <Columns>
              <Column is-10 is-offset-1>
                <p className="subtitle is-text-right is-5 is-marginless">Tax:      <strong>${order.tax}</strong></p>
                <p className="subtitle is-text-right is-5 is-marginless">Shipping: <strong>${order.shipping}</strong></p>
                <p className="subtitle is-text-right is-5 is-marginless">Discount: <strong>${order.discount}</strong></p>
                <p className="subtitle is-text-right is-5 is-marginless">Subtotal: <strong>${order.subtotal}</strong></p>
                <p className="subtitle is-text-right is-5 is-marginless">Total:    <strong>${order.total}</strong></p>
              </Column>
            </Columns>

            <Columns>
              <Column is-5 is-offset-1>
                <h3 className="subtitle is-3">Payment</h3>
                <p>Payment Method: <strong>Credit Card</strong></p>
                <p>Status: <span className="tag is-warning">Waiting for payment</span></p>
              </Column>

              <Column is-5 is-offset-1>
                <h3 className="subtitle is-3">Shipping</h3>
                Name: <strong>{order.address.name}</strong> Phone: <strong>{order.address.phone}</strong><br/>
                <strong>{order.address.address_line_one}</strong><br/>
                <strong>{order.address.address_line_two}</strong><br/>
                <strong>{order.address.city}/{order.address.state}</strong><br/>
                <strong>{order.address.country}</strong><br/>
                <strong>{order.address.zip}</strong>
              </Column>
            </Columns>
          </div>
        )}
        {this.renderEmptyLabel(this.props.orders)}
      </div>
    )
  }
}

export default OrdersListComponent
