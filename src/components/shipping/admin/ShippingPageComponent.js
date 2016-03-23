import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import Container from '../../../template/src/components/Container'
import Section from '../../../template/src/components/Section'
import Columns from '../../../template/src/components/Columns'
import Column from '../../../template/src/components/Column'
import Icon from '../../../template/src/components/Icon'

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
              <h1 className="title is-text-centered">
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                    New shipping Option
              </h1>
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
