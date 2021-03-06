import React from 'react'
import { Button, Icon, Subtitle, Table } from 'bulma-react'

export default function CartListItemsComponent (props) {
  let emptyCartLabel = (!props.cartItems.length) ?
                       (<Subtitle is-4 is-text-centered>You shopping cart is empty :(</Subtitle>) :
                       ''
  return (
    <div>
      <Table is-bordered>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item, i) =>
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td><input className="input" type="number" value={item.quantity} onChange={ (e) => { props.updateCartProduct(i, e.target.value) } }/></td>
              <td>${item.price * item.quantity}</td>
              <td className="table-link table-icon">
                <Button type="button" onClick={ () => { props.removeCartProduct(i) } }>
                  <Icon icon='trash'/>
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {emptyCartLabel}
    </div>
  )
}
