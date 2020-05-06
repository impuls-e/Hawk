import React, { useContext } from 'react';

import StoreContext from '~/context/StoreContext';
import LineItem from './LineItem';
import './styles.css';
import { MdSecurity } from 'react-icons/md';

const Cart = () => {
  const { store: { checkout } } = useContext(StoreContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  const line_items = checkout.lineItems.map((line_item) => {
    console.log(line_item);
    return <LineItem key={line_item.id.toString()} line_item={line_item} />;
  });

  return (
    <React.Fragment>
      <div className="cart-products">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Entrega</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>{line_items}</tbody>
        </table>
      </div>

      <div className="cart-values">
        <div>
          <p>Subtotal: R$ {checkout.subtotalPrice}</p>
        </div>

        <div>
          <p>Entrega: R$ {checkout.totalTax}</p>
        </div>
        <div>
          <p className="cart-value-total">Total: R$ {checkout.totalPrice}</p>
        </div>
        <div>
          <button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>
            Fechar pedido
            <MdSecurity />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
