import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import IntroProducts from "../components/introProducts"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <Seo title={product.title} />
      <IntroProducts
        title={product.title}
        description={product.description}
        imgUrl={product.imgUrl}
        value={product.value}
      />
    </Layout>
  )
}
export default ProductTemplate
