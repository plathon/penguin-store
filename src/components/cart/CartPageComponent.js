import React, { Component } from 'react'

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
                <Button type="button" is-pulled-right>Clear Cart</Button>
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
                  <tr>
                    <td>Misty Abbott</td>
                    <td>Bass Guitar</td>
                    <td>Bass Guitar</td>
                    <td><input className="input" type="number" value="1"/></td>
                    <td>Bass Guitar</td>
                    <td className="table-link table-icon">
                      <a href="#">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

            </Column>
          </Columns>

          <Columns>
            <Column is-5 is-offset-1>
              <h3 className="title">Total: $200</h3>
            </Column>
            <Column is-5>
              <Button is-success is-pulled-right is-large>Finish</Button>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default CartPageComponent
