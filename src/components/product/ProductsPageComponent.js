import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Button from '../../template/src/components/Button'

import ProductsList from './ProductsListComponent'

export default class ProductsPageComponent extends Component {

  constructor (props) {
    super(props)
    this.renderTopbar = this.renderTopbar.bind(this)
  }

  renderTopbar () {
    if (this.props.userIsAdmin) {
      return (
        <Columns>
          <Column is-10>
            <div className="control has-icon">
              <input type="text" name="search" className="input is-flat" placeholder="Search here..."/>
              <i className="fa fa-search"></i>
            </div>
          </Column>
          <Column is-2>
            <Link to="admin/products/new" className="button is-primary">New Product</Link>
          </Column>
        </Columns>
      )
    } else {
      return (
        <Columns>
          <Column is-12>
            <div className="control has-icon">
              <input type="text" name="search" className="input is-flat" placeholder="Search here..."/>
              <i className="fa fa-search"></i>
            </div>
          </Column>
        </Columns>
      )
    }
  }

  render () {
    return (
      <Section>
        <Container>

          {this.renderTopbar()}

          <ProductsList products={this.props.products}
                        insertProductToCart={this.props.insertProductToCart}
                        removeProduct={this.props.removeProduct}
                        userIsAdmin={this.props.userIsAdmin}/>

          <div className="is-text-centered">
            <Button is-primary is-large>Load More</Button>
          </div>

        </Container>
      </Section>
    )
  }
}
