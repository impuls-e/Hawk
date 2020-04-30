import React from 'react'
import Product from '../Product/'
import './styles.css'

export default function SingleCategory({ category, title }) {
  return (
    <section
      className="header-offset product-catalog"
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <h2> {title}</h2>
      <div>
        <Product product={category} />
      </div>
    </section>
  )
}
