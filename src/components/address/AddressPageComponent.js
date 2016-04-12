import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Container, Section, Columns, Column, Icon, Title } from 'bulma-react'

import AddressForm from './AddressFormComponent'

export default class AddressPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={hashHistory.goBack.bind(this)}/>
                Address
              </Title>
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
