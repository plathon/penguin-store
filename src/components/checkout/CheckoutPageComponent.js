import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import CheckoutForm from './CheckoutFormComponent'

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

          <CheckoutForm addresses={this.props.addresses}
                        cartItems={this.props.cartItems}
                        cartTotal={this.props.cartTotal}
                        isLoading={this.props.isLoading}
                        checkout={this.props.checkout}/>

        </Container>
      </Section>
    )
  }
}

export default CheckoutPageComponent
