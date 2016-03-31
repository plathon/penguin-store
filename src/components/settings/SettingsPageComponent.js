import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Container, Section, Columns, Column, Icon, Title } from 'bulma-react'

import SettingsForm from './SettingsFormComponent'

class SettingsPageContainer extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                    General Settings
              </Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <SettingsForm insertSettings={this.props.insertSettings}
                            isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default SettingsPageContainer
