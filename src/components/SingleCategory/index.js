import React from 'react';
import Product from '../Product/';
import './styles.css';

export default function SingleCategory({ category, title }) {
  return (
    <section className="header-offset product-catalog">
      <h2> {title}</h2>
      <div>
        <Product product={category} />
      </div>
    </section>
  );
}
