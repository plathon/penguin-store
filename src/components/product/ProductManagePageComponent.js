import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Container, Section, Columns, Column, Icon, Title } from 'bulma-react'

import ProductManageForm from './ProductManageFormComponent'

export default class ProductManagePageComponent extends Component {

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
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                Product
              </Title>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <ProductManageForm isLoading={this.props.isLoading}
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
