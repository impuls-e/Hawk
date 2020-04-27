import React from 'react'

import SEO from '../components/Seo'

import ProductCatalog from '../components/ProductCatalog'
import Hero from '../components/Hero'
import InstagramFeed from '../components/InstagramFeed'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ProductCatalog />
    <InstagramFeed></InstagramFeed>
  </>
)

export default IndexPage
