import React, { Component } from 'react'
import { Link } from 'react-router'
import { Columns, Column, Card, CardImage, CardContent, Content, Control, Button } from 'bulma-react'

export default class ProductsListComponent extends Component {

  constructor (props) {
    super(props)
    this.renderControlButtons = this.renderControlButtons.bind(this)
  }

  renderControlButtons (product, i) {
    if ( this.props.userIsAdmin ) {
      return (
        <Control>
          <Button type="button" is-primary onClick={this.props.insertProductToCart.bind(this, product)}>Add To Card</Button>
          <Button type="button"
                  is-danger
                  is-outlined
                  is-pulled-right
                  is-loading={this.props.isLoading}
                  is-disabled={this.props.isLoading}
                  onClick={this.props.removeProduct.bind(this, i)}>Delete</Button>
          <Link className="button is-pulled-right" to={`admin/products/${i}/edit`}>Edit</Link>
        </Control>
      )
    } else {
      return (
        <Control>
          <Button type="button"
                  is-primary
                  is-fullwidth
                  onClick={this.props.insertProductToCart.bind(this, product)}>Add To Card</Button>
        </Control>
      )
    }
  }

  render () {
    return (
      <Columns is-multiline is-centered>
        {this.props.products.map((product, i) =>
          <Column is-4 key={i}>
            <Card>
              <CardImage/>
              <CardContent>
                <Content>
                  <p className="is-text-centered">
                    <Link className="title is-5" to={`product/${i}`}>{product.name}</Link>
                  </p>
                  <p className="is-text-centered">{product.description}</p>
                  <h3 className="is-text-centered is-marginless">${product.price}</h3>
                </Content>

                {this.renderControlButtons(product, i)}

              </CardContent>
            </Card>
          </Column>
        )}
      </Columns>
    )
  }
}
