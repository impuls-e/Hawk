import React from 'react'
import './styles.css'

import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'
export default function Product({ product }) {
  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }
  const data = useStaticQuery(graphql`
    query productQuery {
      tshirt: allShopifyProduct(
        sort: { fields: [title] }
        filter: { productType: { eq: "tshirt" } }
      ) {
        edges {
          node {
            title
            handle
            shopifyId
            description
            availableForSale
            options {
              name
              values
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            productType
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      pants: allShopifyProduct(
        sort: { fields: [title] }
        filter: { productType: { eq: "pants" } }
      ) {
        edges {
          node {
            title
            handle
            shopifyId
            description
            availableForSale
            options {
              name
              values
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            productType
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      short: allShopifyProduct(
        sort: { fields: [title] }
        filter: { productType: { eq: "short" } }
      ) {
        edges {
          node {
            title
            handle
            shopifyId
            description
            availableForSale
            options {
              name
              values
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            productType
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      accessories: allShopifyProduct(
        sort: { fields: [title] }
        filter: { productType: { eq: "accessories" } }
      ) {
        edges {
          node {
            title
            handle
            shopifyId
            description
            availableForSale
            options {
              name
              values
            }
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            productType
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)
  const products = data[product].edges
  const formattedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return products.map(product => (
    <Link
      to={`/produto/${product.node.handle}`}
      key={generateKey(product.node.shopifyId)}
      className="product-item"
    >
      <Img
        fluid={product.node.images[0].localFile.childImageSharp.fluid}
        alt="An image apresentation of current product"
      />
      <div className="info-item">
        <div className="info-text">
          <h4>{product.node.title}</h4>
          <p>
            {formattedNumber.format(
              product.node.priceRange.minVariantPrice.amount
            )}
          </p>
        </div>
        <Link to={`/produto/${product.node.handle}`}>Ver Produto</Link>
      </div>
    </Link>
  ))
}
