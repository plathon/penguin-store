import React, { Component } from 'react'
import { Container, Section, Columns, Column, Title, Subtitle } from 'bulma-react'

import UserForm from './UserFormComponent'
import ChangePasswordForm from './ChangePasswordFormComponent'

export default class UserPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title>User</Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>

              <UserForm changeUserData={this.props.changeUserData}
                        isLoading={this.props.isLoading}/>

              <br/>

              <Subtitle is-5>Change password</Subtitle>
              <ChangePasswordForm updateUserPassword={this.props.updateUserPassword}
                                  isLoading={this.props.isLoading}/>

            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
