import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import './styles.css'
import { MdSecurity } from 'react-icons/md'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="cart">
      {line_items}
      <h2>Subtotal</h2>
      <p>R$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>R$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>R$ {checkout.totalPrice}</p>
      <br />
      <button
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Checkout
        <MdSecurity />
      </button>
    </div>
  )
}

export default Cart
