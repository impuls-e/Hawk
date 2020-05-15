import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/Seo'
import ProductForm from '~/components/ProductForm'
import { Img } from '~/utils/styles'
import './styles.css'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const formattedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const value = formattedNumber.format(
    product.priceRange.minVariantPrice.amount
  )

  const [currentImage, setCurrentImage] = useState(
    product.images[0].localFile.childImageSharp.fluid
  )

  const imgs = product.images

  function handleChangeImages(image) {
    setCurrentImage(image)
  }

  const productDescripton = (
    <div id="" className="">
      {product.descriptionHtml}
    </div>
  )

  console.log(product)
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <div
        className="intro-projects"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <section>
          <div className="img-main">
            <Img
              fluid={currentImage}
              alt="An image apresentation of current product"
              id="current"
            />
          </div>
          <div className="imgs-body">
            {imgs.map(img => (
              <div
                key={img.id}
                onClick={() =>
                  handleChangeImages(img.localFile.childImageSharp.fluid)
                }
              >
                <Img
                  fluid={img.localFile.childImageSharp.fluid}
                  alt="An image apresentation of current product"
                />
              </div>
            ))}
          </div>
          {/* <div className="img-main">
            <Img
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt="An image apresentation of current product"
            />
          </div>
          <div className="imgs-body">
            {imgs.map(img => (
              <Img
                key={img.id}
                fluid={img.localFile.childImageSharp.fluid}
                alt="An image apresentation of current product"
              />
            ))}
          </div> */}
        </section>
        <aside>
          <div className="description">
            <h1>{product.title}</h1>
            <h3>{value}</h3>
            <h4>Descrição do Produto</h4>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
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
