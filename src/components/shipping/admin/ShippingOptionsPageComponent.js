import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../../template/src/components/Container'
import Section from '../../../template/src/components/Section'
import Columns from '../../../template/src/components/Columns'
import Column from '../../../template/src/components/Column'

import ShippingOptionsList from './ShippingOptionsListComponent'

class ShippingOptionsPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">
                Shipping Settings
                <Link className="button is-primary is-pulled-right" to="/admin/settings/shipping-options/new">Add Shipping Option</Link>
              </h1>
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
