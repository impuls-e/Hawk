import React from 'react'
import Product from '../Product/'
import './styles.css'

export default function SingleCategory({ category, title }) {
  return (
    <section className="header-offset product-catalog">
      <h2> {title}</h2>
      <div
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <Product product={category} />
      </div>
    </section>
  )
}
