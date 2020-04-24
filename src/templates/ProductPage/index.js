import React from "react"
import { graphql } from "gatsby"
import { FiShoppingBag } from "react-icons/fi"

import SEO from "../../components/Seo"
import ProductForm from "~/components/ProductForm"
import { Img } from "~/utils/styles"
import "./styles.css"

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const formattedNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  const value = formattedNumber.format(
    product.priceRange.minVariantPrice.amount
  )

  return (
    <>
      <SEO title={product.title} description={product.description} />

      <div className="intro-projects">
        <section>
          <div className="img-main">
            <Img
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt="An image apresentation of current product"
            />
          </div>
          <div className="imgs-body">
            <img
              src={`http://localhost:8000/static/2e86485e9b61f0a92f09ac7e376751f4/c2da5/tshirt-black.png`}
              alt="Imagem do produto auxiliar"
            />
            <img
              src={`http://localhost:8000/static/2e86485e9b61f0a92f09ac7e376751f4/c2da5/tshirt-black.png`}
              alt="Imagem do produto auxiliar2"
            />
            <img
              src={`http://localhost:8000/static/2e86485e9b61f0a92f09ac7e376751f4/c2da5/tshirt-black.png`}
              alt="Imagem do produto auxiliar3"
            />
          </div>
        </section>
        <aside>
          <div className="description">
            <h1>{product.title}</h1>
            <h3>{value}</h3>
            <h4>Descrição do Produto</h4>
            <p>{product.description}</p>
            <ProductForm product={product} />
          </div>
        </aside>
      </div>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
