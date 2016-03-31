import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column } from 'bulma-react'

import SignInForm from './SignInForm'

export default class SignInPage extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-half is-offset-quarter>
              <SignInForm authenticateUser={this.props.authenticateUser}
                          isLoding={this.props.isLoding}/>
            </Column>
          </Columns>

          <Columns>
            <Column is-half is-offset-quarter is-text-centered>
              <Link to="signup">Don't have an account yet, Sign up now!</Link>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }

}
