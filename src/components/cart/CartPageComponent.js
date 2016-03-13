import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Button from '../../template/src/components/Button'

class CartPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">
                Cart
                <Button type="button" is-pulled-right onClick={this.props.emptyCart.bind(this)}>Clear Cart</Button>
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>

              <table className="table is-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cartItems.map((item, i) =>
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td><input className="input" type="number" value={item.quantity} onChange={(e) => { this.props.updateCartProduct(i, e.target.value) }}/></td>
                      <td>${item.price * item.quantity}</td>
                      <td className="table-link table-icon">
                        <Button onClick={this.props.removeCartProduct.bind(this, i)}>
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

            </Column>
          </Columns>

          <Columns>
            <Column is-5 is-offset-1>
              <h3 className="title">Total: ${this.props.cartTotal}</h3>
            </Column>
            <Column is-5>
              <Link className="button is-success is-pulled-right is-large"
                    to="checkout">Finish</Link>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default CartPageComponent
