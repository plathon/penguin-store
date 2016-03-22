import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import Container from '../../../template/src/components/Container'
import Section from '../../../template/src/components/Section'
import Columns from '../../../template/src/components/Columns'
import Column from '../../../template/src/components/Column'
import Icon from '../../../template/src/components/Icon'

import PaymentSettingsForm from './PaymentSettingsFormComponent'

class PaymentSettingsPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title is-text-centered">
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                Payment Settings
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <PaymentSettingsForm insertPaymentSettings={this.props.insertPaymentSettings}
                                   isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default PaymentSettingsPageComponent
