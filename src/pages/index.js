import React from 'react'

import SEO from '../components/Seo'

import ProductCatalog from '../components/ProductCatalog'
import Hero from '../components/Hero'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ProductCatalog />
  </>
)

export default IndexPage
