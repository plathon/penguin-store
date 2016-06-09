import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Control, Subtitle, Table } from 'bulma-react'

class ShippingOptionsListComponent extends Component {

  renderEmptylabel (shippingOptions) {
    if (!shippingOptions.length)
      return <Subtitle is-4 is-text-centered>You dont have any shipping option yet :(</Subtitle>
  }

  render () {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.shippingOptions.map((shippingOption, i) =>
              <tr key={i}>
                <th>
                  {shippingOption.title}
                </th>
                <th>
                  <Control is-horizontal is-pulled-right>
                    <Link className="button" to={`/admin/settings/shipping-options/${i}/edit`}>Edit</Link>
                    <Button type="button"
                            is-loading={this.props.isLoading}
                            is-disabled={this.props.isLoading}
                            is-pulled-right
                            onClick={this.props.removeShippingOption.bind(this, i, shippingOption._id)}>Delete</Button>
                  </Control>
                </th>
              </tr>
            )}
          </tbody>
        </Table>
        {this.renderEmptylabel(this.props.shippingOptions)}
      </div>
    )
  }
}

export default ShippingOptionsListComponent
