import React, { Component } from 'react'
import { Link } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Button from '../../template/src/components/Button'

import ProductsList from './ProductsListComponent'

export default class ProductsPageComponent extends Component {
  render () {
    return (
      <Section>
        <Container>

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

          <ProductsList products={this.props.products}
                        insertProductToCart={this.props.insertProductToCart}/>          

          <div className="is-text-centered">
            <Button is-primary is-large>Load More</Button>
          </div>

        </Container>
      </Section>
    )
  }
}
