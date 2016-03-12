import React, { Component } from 'react'
import { Link } from 'react-router'

import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Card from '../../template/src/components/Card'
import CardImage from '../../template/src/components/CardImage'
import CardContent from '../../template/src/components/CardContent'
import Content from '../../template/src/components/Content'
import Control from '../../template/src/components/Control'
import Button from '../../template/src/components/Button'

export default class ProductsListComponent extends Component {
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
                  <h3 className="is-text-centered is-marginless">$ {product.price}</h3>
                </Content>
                <Control>
                  <Button type="button" is-primary onClick={this.props.insertProductToCart.bind(this, product)}>Add To Card</Button>
                  <Link className="button is-pulled-right" to={`admin/products/${i}/edit`}>Edit</Link>
                </Control>
              </CardContent>
            </Card>
          </Column>
        )}
      </Columns>
    )
  }
}
