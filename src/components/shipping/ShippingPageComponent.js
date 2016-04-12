import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Container, Section, Columns, Column, Icon, Title } from 'bulma-react'

import ShippingForm from './ShippingFormComponent'

class ShippingPageComponent extends Component {

  constructor (props) {
    super(props)
    this.submitShipping = this.submitShipping.bind(this)
  }

  submitShipping (shippingOption) {
    if (!this.props.shippingIndex)
      this.props.insertShippingOption(shippingOption)
    else
      this.props.updateShippingOption(shippingOption, this.props.shippingIndex)
  }

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={hashHistory.goBack.bind(this)}/>
                    New shipping Option
              </Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <ShippingForm submitShipping={this.submitShipping}
                            shippingIndex={this.props.shippingIndex}
                            isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default ShippingPageComponent
