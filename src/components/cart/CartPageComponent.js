import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import { Container, Section, Columns, Column, Control, Button, Icon, Title } from 'bulma-react'

import CartListItems from './CartListItemsComponent'

class CartPageComponent extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                Cart
                <Button type="button"
                        is-pulled-right
                        is-disabled={!this.props.cartItems.length}
                        onClick={this.props.emptyCart.bind(this)}>Clear Cart</Button>
              </Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <CartListItems cartItems={this.props.cartItems}
                             removeCartProduct={this.props.removeCartProduct}
                             updateCartProduct={this.props.updateCartProduct}/>
            </Column>
          </Columns>

          <Columns>
            <Column is-5 is-offset-1>
              <Title>Total: ${this.props.cartTotal}</Title>
            </Column>

            <Column is-5>
              <Control>
                <Link className="button is-success is-large is-pulled-right"
                      to="checkout">Finish</Link>
              </Control>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default CartPageComponent
