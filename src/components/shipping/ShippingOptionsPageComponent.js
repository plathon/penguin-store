import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column, Title } from 'bulma-react'

import ShippingOptionsList from './ShippingOptionsListComponent'

class ShippingOptionsPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title>
                Shipping Settings
                <Link className="button is-primary is-pulled-right" to="/admin/settings/shipping-options/new">Add Shipping Option</Link>
              </Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <ShippingOptionsList shippingOptions={this.props.shippingOptions}
                                   removeShippingOption={this.props.removeShippingOption}
                                   isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default ShippingOptionsPageComponent
