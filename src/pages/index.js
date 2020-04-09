import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"
import ProductCatalog from "../components/ProductCatalog"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero"

import Header from "../components/Header/"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <Header siteTitle={data.site.siteMetadata.title} />

      <Hero />
      <ProductCatalog />
    </Layout>
  )
}
