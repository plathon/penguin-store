import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Section, Columns, Column, Button } from 'bulma-react'

import ProductsList from './ProductsListComponent'
import ProductSearchBar from './ProductSearchBarComponent'

export default class ProductsPageComponent extends Component {

  constructor (props) {
    super(props)
    this.renderTopbar         = this.renderTopbar.bind(this)
    this.renderLoadMoreButton = this.renderLoadMoreButton.bind(this)
  }

  renderLoadMoreButton () {
    if ( this.props.products.length >= this.props.offset ) {
      return (
        <Button type="button"
                is-primary
                is-large
                is-loading={this.props.isLoading}
                is-disabled={this.props.isLoading}
                onClick={this.props.loadMoreProducts.bind(
                  this,
                  this.props.limit,
                  this.props.offset,
                  this.props.searchCriteria)
                }>Load More</Button>
      )
    }
  }

  renderTopbar () {
    if (this.props.userIsAdmin) {
      return (
        <Columns>
          <Column is-10>
            <ProductSearchBar searchProducts={this.props.searchProducts}/>
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
            <ProductSearchBar searchProducts={this.props.searchProducts}/>
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
                        isLoading={this.props.isLoading}
                        userIsAdmin={this.props.userIsAdmin}/>

          <div className="is-text-centered">
            {this.renderLoadMoreButton()}
          </div>

        </Container>
      </Section>
    )
  }
}
