import React from 'react';
import Product from '../Product/';
import './styles.css';

export default function SingleCategory({ category }) {
  return (
    <section className="section product-catalog">
      <h2> CAMISETAS</h2>
      <div>
        <Product product={'tshirt'} />
      </div>
    </section>
  );
}
