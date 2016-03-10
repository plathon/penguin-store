import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import AddressesList from './AddressesListComponent'

export default class AddressesPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">
                Addresses
                <Link className="button is-primary is-pulled-right" to="address">Add Address</Link>
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <AddressesList addresses={this.props.addresses}
                             removeAddress={this.props.removeAddress}
                             isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
