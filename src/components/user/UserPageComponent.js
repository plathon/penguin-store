import React, { Component } from 'react'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import UserForm from './UserFormComponent'

export default class UserPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>
          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title">User</h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <UserForm changeUserData={this.props.changeUserData}
                        isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
