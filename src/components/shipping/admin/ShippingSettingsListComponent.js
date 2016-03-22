import React, { Component } from 'react'

import Button from '../../../template/src/components/Button'

class ShippingSettingsListComponent extends Component {

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

                </th>
                <th>
                  <Button type="button"
                          is-pulled-right>Delete</Button>
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

export default ShippingSettingsListComponent
