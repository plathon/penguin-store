import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Control from '../../template/src/components/Control'
import Button from '../../template/src/components/Button'
import Icon from '../../template/src/components/Icon'

import CartListItems from './CartListItemsComponent'

class CartPageComponent extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title is-text-centered">
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                Cart
                <Button type="button"
                        is-pulled-right
                        is-disabled={!this.props.cartItems.length}
                        onClick={this.props.emptyCart.bind(this)}>Clear Cart</Button>
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <CartListItems cartItems={this.props.cartItems}
                             removeCartProduct={this.props.removeCartProduct}/>
            </Column>
          </Columns>

          <Columns>
            <Column is-5 is-offset-1>
              <h3 className="title">Total: ${this.props.cartTotal}</h3>
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
