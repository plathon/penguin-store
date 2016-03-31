import React, { Component } from 'react'
import { Columns, Column, Subtitle, Table } from 'bulma-react'

class OrdersListComponent extends Component {

  renderEmptyLabel (orders) {
    if (!orders.length)
      return <Subtitle is-4 is-text-centered>You don't have any order yet :(</Subtitle>
  }

  render () {
    return (
      <div>
        {this.props.orders.map((order, orderIndex) =>
          <div key={orderIndex}>
            <Columns>
              <Column is-10 is-offset-1>
                <Subtitle is-3 is-text-centered>25/12/2012 00:05:23</Subtitle>
                <Table>
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
                </Table>
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
                <Subtitle is-3>Payment</Subtitle>
                <p>Payment Method: <strong>Credit Card</strong></p>
                <p>Status: <span className="tag is-warning">Waiting for payment</span></p>
              </Column>

              <Column is-5 is-offset-1>
                <Subtitle is-3>Shipping</Subtitle>
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
