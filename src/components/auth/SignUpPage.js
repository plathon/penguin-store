import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column } from 'bulma-react'

import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-half is-offset-quarter>
              <SignUpForm registerUser={this.props.registerUser}
                          isLoding={this.props.isLoding}/>
            </Column>
          </Columns>

          <Columns>
            <Column is-half is-offset-quarter is-text-centered>
              <Link to="signin">Already have an account, Sign in now!</Link>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }

}

export default SignUpPage
