import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column } from 'bulma-react'

import ResetPasswordForm from './ResetPasswordForm'

class ResetPasswordPage extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-half is-offset-quarter>
              <ResetPasswordForm/>
            </Column>
          </Columns>

          <Columns>
            <Column is-half is-offset-quarter is-text-centered>
              <Link to="signin">Already have an account, Sign in now!</Link><br/>
              <Link to="signup">Don't have an account yet, Sign up now!</Link>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }

}

export default ResetPasswordPage
