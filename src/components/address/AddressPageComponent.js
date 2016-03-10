import React, { Component } from 'react'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import AddressForm from './AddressFormComponent'

export default class AddressPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">Address</h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <AddressForm insertAddress={this.props.insertAddress}
                           isLoading={this.props.isLoading} />
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
