import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'

import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

  render () {
    return (
      <Section>
        <Container>
          <Columns>
            <Column is-half is-offset-quarter>
              <SignUpForm registerUser={this.props.registerUser}
                          userStartRegister={this.props.userStartRegister}/>
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
