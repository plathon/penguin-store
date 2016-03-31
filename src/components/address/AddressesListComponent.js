import React, { Component } from 'react'
import { Button, Subtitle, Table } from 'bulma-react'

export default class AddressListComponent extends Component {

  renderEmptylabel (addresses) {
    if (!addresses.length)
      return <Subtitle is-4 is-text-centered>You don't have any address yet :(</Subtitle>
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
        </Table>
        {this.renderEmptylabel(this.props.addresses)}
      </div>
    )
  }
}
