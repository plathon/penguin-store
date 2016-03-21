import React from 'react'

import Button from '../../template/src/components/Button'

export default function CartListItemsComponent (props) {
  let emptyCartLabel = (!props.cartItems.length) ?
                       (<h1 className="subtitle is-4 is-text-centered">You shopping cart is empty :(</h1>) :
                       ''
  return (
    <div>
      <table className="table is-bordered">
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
              <td><input className="input" type="number" value={item.quantity} onChange={(e) => { this.props.updateCartProduct(i, e.target.value) }}/></td>
              <td>${item.price * item.quantity}</td>
              <td className="table-link table-icon">
                <Button type="button" onClick={props.removeCartProduct.bind(this, i)}>
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {emptyCartLabel}
    </div>
  )
}
