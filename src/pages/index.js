import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"
import ProductCatalog from "../components/ProductCatalog"
import Hero from "../components/Hero"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <ProductCatalog />
    </Layout>
  )
}
