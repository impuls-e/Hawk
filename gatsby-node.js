const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
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
                    src
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
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/produto/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  })
}
