import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import Container from '../../../template/src/components/Container'
import Section from '../../../template/src/components/Section'
import Columns from '../../../template/src/components/Columns'
import Column from '../../../template/src/components/Column'
import Icon from '../../../template/src/components/Icon'

import ProductForm from './ProductForm'

export default class ProductPage extends Component {

  constructor (props) {
    super(props)
    this.submitProduct = this.submitProduct.bind(this)
  }

  submitProduct (product) {
    let productIndex = this.props.productIndex
    if (!productIndex) {
      //inserting
      this.props.insertProduct(product)
    } else {
      //editing
      this.props.updateProduct(product, productIndex)
    }
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
                Product
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <ProductForm isLoading={this.props.isLoading}
                           productIndex={this.props.productIndex}
                           submitProduct={this.submitProduct}
                           categories={this.props.categories}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}
