import React, { Component } from 'react'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import OrdersList from './OrdersListComponent'

class OrdersPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">
                My Orders
              </h1>
            </Column>
          </Columns>

          <OrdersList orders={this.props.orders}/>

        </Container>
      </Section>
    )
  }
}

export default OrdersPageComponent
