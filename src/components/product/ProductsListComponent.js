import React, { Component } from 'react'

import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Card from '../../template/src/components/Card'

export default class ProductsListComponent extends Component {
  render () {
    return (
      <Columns is-multiline is-centered>
        {this.props.products.map((product, i) =>
          <Column is-4 key={i}>
            <Card title={product.name}
                  content={product.description}
                  price={product.price}
                  editUrl={`admin/products/${i}/edit`}/>
          </Column>
        )}
      </Columns>
    )
  }
}
