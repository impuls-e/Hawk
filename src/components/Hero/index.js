import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { SocialProfileJsonLd } from 'gatsby-plugin-next-seo'
import './styles.css'

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      heroDesktop: file(relativePath: { eq: "heroDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroMobile: file(relativePath: { eq: "heroMobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const sources = [
    {
      ...data.heroMobile.childImageSharp.fluid,
      media: `(max-width: 399px)`,
    },
    {
      ...data.heroDesktop.childImageSharp.fluid,
      media: `(min-width:400px)`,
    },
  ]
  return (
    <>
      <SocialProfileJsonLd
        type="Person"
        name="Hawk"
        url="https://hawk.art.br"
        sameAs={['https://instagram.com/hawk.br']}
      />
      <div className="hero">
        <BackgroundImage
          Tag="section"
          className="background"
          fluid={sources}
          backgroundColor={`#040e18`}
        />
      </div>
    </>
  )
}
