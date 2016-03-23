import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../../../template/src/components/Button'
import Control from '../../../template/src/components/Control'

class ShippingOptionsListComponent extends Component {

  renderEmptylabel (shippingOptions) {
    if (!shippingOptions.length)
      return <h1 className="subtitle is-4 is-text-centered">You don't have any shipping option yet :(</h1>
  }

  render () {
    return (
      <div>
        <table className="table">
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
                            onClick={this.props.removeShippingOption.bind(this, i)}>Delete</Button>
                  </Control>
                </th>
              </tr>
            )}
          </tbody>
        </table>
        {this.renderEmptylabel(this.props.shippingOptions)}
      </div>
    )
  }
}

export default ShippingOptionsListComponent
