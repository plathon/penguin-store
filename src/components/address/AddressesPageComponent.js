import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import Button from '../../template/src/components/Button'

export default class AddressesPageComponent extends Component {
  render () {
    console.log(this.props)
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

              <table className="table">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.addresses.map((address, i) =>
                    <tr>
                      <th>
                        <string>test</string>
                      </th>
                      <th>
                        <Button type="button" is-pulled-right>Delete</Button>
                      </th>
                    </tr>
                  )}
                </tbody>
              </table>

            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
