import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"
import ProductCatalog from "../components/ProductCatalog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductCatalog />
  </Layout>
)

export default IndexPage
