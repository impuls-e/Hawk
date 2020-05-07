import React from 'react';

import Cart from '~/components/Cart';
import { Container } from '~/utils/styles';

const CartPage = () => (
  <Container
    data-sal="slide-up"
    data-sal-delay="200"
    data-sal-easing="ease"
    data-sal-duration="1000"
  >
    <h1>Meu Carrinho</h1>
    <Cart />
  </Container>
);

export default CartPage;
