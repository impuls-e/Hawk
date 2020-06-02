import React from 'react'

import SEO from '../components/Seo'

import ProductCatalog from '../components/ProductCatalog'
import Hero from '../components/Hero'
// import InstagramFeed from '../components/InstagramFeed'
const IndexPage = () => (
  <>
    <SEO />
    <Hero />
    <ProductCatalog />
    {/* <InstagramFeed /> */}
  </>
)

export default IndexPage
