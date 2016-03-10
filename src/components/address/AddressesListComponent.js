import React, { Component } from 'react'

import Button from '../../template/src/components/Button'

export default class AddressListComponent extends Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.addresses.map((address, i) =>
            <tr key={i}>
              <th>
                <string>Name: </string>{address.name} <string>Phone: </string>{address.phone}<br/>
                {address.address_line_one}<br/>
                {address.address_line_two}<br/>
                {address.city}/{address.state}<br/>
                {address.country}<br/>
                {address.zip}
              </th>
              <th>
                <Button type="button"
                        is-pulled-right
                        is-loading={this.props.isLoading}
                        is-disabled={this.props.isLoading}
                        onClick={this.props.removeAddress.bind(this, i)}>Delete</Button>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}
