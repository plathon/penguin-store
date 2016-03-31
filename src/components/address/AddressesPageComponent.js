import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column, Title } from 'bulma-react'

import AddressesList from './AddressesListComponent'

export default class AddressesPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title>
                Addresses
                <Link className="button is-primary is-pulled-right" to="address">Add Address</Link>
              </Title>
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
