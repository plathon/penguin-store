import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column, Title } from 'bulma-react'

import CheckoutForm from './CheckoutFormComponent'

class CheckoutPageComponent extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                Checkout
              </Title>
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
