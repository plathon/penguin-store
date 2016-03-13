import React, { Component } from 'react'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Button from '../../template/src/components/Button'

class CheckoutPageComponent extends Component {
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
              <h1 className="subtitle">
                Shipping Address
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
                  <tr>
                    <th>
                      <p className="control">
                        <label className="radio">
                          <input type="radio" name="question"/>
                        </label>
                      </p>
                    </th>
                    <td>
                      Name: Renan Plathon Phone: +552798156938<br/>
                      Rua Aderbal Athayde Guimarães<br/>
                      ap 201<br/>
                      Vitória/ES<br/>
                      Brazil<br/>
                      29026260
                    </td>
                    <td><h4 className="title is-5">$15</h4></td>
                  </tr>
                  <tr>
                    <th>
                      <p className="control">
                        <label className="radio">
                          <input type="radio" name="question"/>
                        </label>
                      </p>
                    </th>
                    <td>
                      Name: Renan Plathon Phone: +552798156938<br/>
                      Rua Aderbal Athayde Guimarães<br/>
                      ap 201<br/>
                      Vitória/ES<br/>
                      Brazil<br/>
                      29026260
                    </td>
                    <td><h4 className="title is-5">$20</h4></td>
                  </tr>
                </tbody>
              </table>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
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
                  <tr>
                    <td>Product One</td>
                    <td>Product One</td>
                    <td>200</td>
                    <td>1</td>
                    <td>$200</td>
                  </tr>
                </tbody>
              </table>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <h3 className="title">Total: $200</h3>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <Button is-success is-large is-fullwidth>Checkout</Button>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default CheckoutPageComponent
