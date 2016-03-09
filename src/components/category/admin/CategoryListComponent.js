import React, { Component } from 'react'

import Button from '../../../template/src/components/Button'

export default class CategoryListComponent extends Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.categories.map((category, i) =>
            <tr key={i}>
              <th>{category.name}</th>
              <th>
                <Button type="button"
                        is-small
                        onClick={this.props.removeCategory.bind(this, i)}
                        is-disabled={this.props.isLoading}
                        is-loading={this.props.isLoading}>Delete</Button>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}
