import React, { Component } from 'react'
import { Container, Section, Columns, Column, Title } from 'bulma-react'

import OrdersList from './OrdersListComponent'

class OrdersPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title>
                My Orders
              </Title>
            </Column>
          </Columns>

          <OrdersList orders={this.props.orders}/>

        </Container>
      </Section>
    )
  }
}

export default OrdersPageComponent
