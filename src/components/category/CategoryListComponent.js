import React, { Component } from 'react'
import { Button, Subtitle, Table } from 'bulma-react'

export default class CategoryListComponent extends Component {

  renderEmptyLabel (categories) {
    if (!categories.length)
      return <Subtitle is-4 is-text-centered>You dont have any category yet :(</Subtitle>
  }

  render () {
    return (
      <div>
        <Table>
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
                          is-pulled-right
                          is-small
                          onClick={this.props.removeCategory.bind(this, i, category._id)}
                          is-disabled={this.props.isLoading}
                          is-loading={this.props.isLoading}>Delete</Button>
                </th>
              </tr>
            )}
          </tbody>
        </Table>
        {this.renderEmptyLabel(this.props.categories)}
      </div>
    )
  }
}
