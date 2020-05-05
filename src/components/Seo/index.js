import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ lang, pathname }) => {
  const data = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
            social {
              twitter
            }
            searchConsole
          }
        }
      }
    `
  )

  const company = data.site.siteMetadata
  const seo = {
    title: company.title || company.defaultTitle,
    description: company.description || company.defaultDescription,
    image: `${company.siteUrl}${company.image || company.defaultImage}`,
    url: `${company.siteUrl}${company.pathname || '/'}`,
    canonical: pathname ? `${company.siteUrl}${pathname}` : null,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={company.titleTemplate}
      htmlAttributes={{
        lang,
      }}
      link={
        seo.canonical
          ? [
              {
                rel: 'canonical',
                href: seo.canonical,
              },
            ]
          : []
      }
    >
      <meta name="google-site-verification" content={company.searchConsole} />
      <meta name="description" content={seo.description} />
      <meta
        name="image"
        content="https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80574084_625340068218316_126440435580141568_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_ohc=p9_4V2DUeQ4AX-09vJI&oh=fa4bd73e4122cef167aefde91548073e&oe=5EDA5EB6"
      />
      <meta charSet="utf-8" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content="website" />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && (
        <meta
          property="og:image"
          content="https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80574084_625340068218316_126440435580141568_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_ohc=p9_4V2DUeQ4AX-09vJI&oh=fa4bd73e4122cef167aefde91548073e&oe=5EDA5EB6"
        />
      )}

      {seo.image && <meta property="og:image:url" content={seo.image} />}

      {seo.image && <meta property="og:image:type" content="image/png" />}
      <meta name="twitter:card" content="summary_large_image" />
      {company.social.twitter && (
        <meta name="twitter:creator" content={company.social.twitter} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
}

export default SEO
