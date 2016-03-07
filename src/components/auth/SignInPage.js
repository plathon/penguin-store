import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import SignInForm from './SignInForm'

export default class SignInPage extends Component {

  render () {
    return (
      <Section>
        <Container>
          <Columns>
            <Column is-half is-offset-quarter>
              <SignInForm authenticateUser={this.props.authenticateUser}
                          userStartLogin={this.props.userStartLogin}/>
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
