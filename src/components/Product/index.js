import React from "react"
import "./styles.css"

import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
export default function Product({ product }) {
  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }

  const data = useStaticQuery(graphql`
    query productQuery {
      tshirt: allMdx(filter: { frontmatter: { tag: { eq: "tshirt" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
              value
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 270) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      pants: allMdx(filter: { frontmatter: { tag: { eq: "pants" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
              value
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 270) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      short: allMdx(filter: { frontmatter: { tag: { eq: "short" } } }) {
        edges {
          node {
            frontmatter {
              description
              title
              value
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 270) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      accessories: allMdx(
        filter: { frontmatter: { tag: { eq: "accessories" } } }
      ) {
        edges {
          node {
            frontmatter {
              description
              title
              value
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 270) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const products = data[product].edges

  return products.map(product => (
    <div
      key={generateKey(product.node.frontmatter.title)}
      className="product-item"
    >
      <Img
        fluid={product.node.frontmatter.imgUrl.childImageSharp.fluid}
        alt="An image apresentation of current product"
      />
      <div className="info-item">
        <div className="info-text">
          <h4>{product.node.frontmatter.title}</h4>
          <p>R$ {product.node.frontmatter.value},00</p>
        </div>
        <Link to="/">Ver Produto</Link>
      </div>
    </div>
  ))
}
