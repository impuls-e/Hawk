/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              description
              title
              value
              imgUrl {
                childImageSharp {
                  fluid(maxHeight: 270) {
                    src
                  }
                }
              }
              handle
            }
          }
        }
      }
    }
  `)
  // The product "title" is generated automatically by Shopify
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/produto/${node.frontmatter.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node.frontmatter.handle,
      },
    })
  })
}
