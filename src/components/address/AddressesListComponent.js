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
                Name: <strong>{address.name}</strong> Phone: <strong>{address.phone}</strong><br/>
                <strong>{address.address_line_one}</strong><br/>
                <strong>{address.address_line_two}</strong><br/>
                <strong>{address.city}/{address.state}</strong><br/>
                <strong>{address.country}</strong><br/>
                <strong>{address.zip}</strong>
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
