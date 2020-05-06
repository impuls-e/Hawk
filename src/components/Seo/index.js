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
      <meta name="image" content={seo.image} />
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
          content="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTE5IDIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3Qgd2lkdGg9IjExOSIgaGVpZ2h0PSIyMCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAxMjc3NjUpIHNjYWxlKDAuMDAzNDI5OTQgMC4wMjA0MDgyKSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwIiB3aWR0aD0iMjk5IiBoZWlnaHQ9IjQ5IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVNzQUFBQXhDQVlBQUFDQ25vLzlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQTloQUFBUFlRR29QNmRwQUFBQUIzUkpUVVVINUFNWEV4d2F6aHBmekFBQURjZEpSRUZVZU5ydG5YdE1GRWNjeDM5elhPOE1JQzBjUlN5cFFMVUJJMElObXB3WXRKaFNMS2lVbHhRRGlMYW1wVmhmYWYySHBHSWIyeVkweHZTaDJNU1VodzN5MEJ3UU1NVUdPWkFTTUtaSklUVTVxeWV4QjZVK3FzQlJ1QjQzL1lNN2l0ek0zdDZ4eUhJN24yVC91SjJibmQzWjJkLzg1cmZmblVFWVkyQXdHQXl4SXdjQXFLeXNoSjkvL3BuNGgrUEhqNE9QajQvZ0JWZFVWRUIzZHpjeDdZc3Z2Z0F2THkvSjN4eWowUWllbnA2QUVKTE1OWnRNSmpoNDhDQk1URXpZcFVWR1JrSkJRUUUxYjMxOVBUUTJOaExURGg4K0RHRmhZWUtlNjBjZmZRUkRRME4yKzVjdFd3YUZoWVVML2w0ME5EVEF3TUNBM2Y2RWhBUUlEZzRXcEl6ZTNsNnE3YkVoazhrZ0t5c0xBR01NYjcvOU5nQUFKbTBHZ3dFd3hvSnYyZG5aMURMdjNiczNKMlV1dE8zTW1UUFEydG9xdWV2ZXNtVUxzVzE0ZTN2RDhQQXdOWisxOHlPMnFjT0hEd3Q2amx4bGZmenh4MjV4SDE1OTlWWGlOV28wR2tHT2YvbnlaVmk4ZURHMUhnRUFLNVZLcUtxcUFvd3h5Smh6S1Y3S3lzcWd0TFJVY3RlOWE5Y3U0djZSa1JGODRjSUZhcjUxNjliQnFsV3JpRzdvRHovOEFHYXpXZEI3UXdJaGhHam56L2lmeXNwS1NFcEtndUhoWVdvY3lzZkhCelUxTmNHT0hUc21QU3hXYmVMazVzMmIwTm5aQ1RVMU5UQThQQ3lwYTMvenpUZmh1ZWVlSXhvZFI4WTdMeStQdUg5d2NCQmZ1blJKa1BNYkh4K0h5c3BLWXRyR2pSdmhwWmRlWWcyWWc1TW5UMEoyZGphWVRDYXFvUW9NREVTdHJhMndlZlBtLzRlRHJPckVTV2xwS1dDTXNkRm81UFFtM0pGRml4WkJabVltTVUycjFZSmVyNmZtemM3T0JybGNqcHp4aHB5bHZyNGVIajU4aUozeENobVRJYWNqUjQ3QW9VT0hzTVZpb1JxcUZTdFdvSTZPRGxpelpzMlRzU3RXaGVMRFlyRkFSVVdGNEErWk93d0ZNY2E0dkx3Y09IcGtTRWhJSUtZMU5EVEEvZnYzQmVsSVNIaDVlYUgwOUhUV2dBbVl6V2JZdTNjdkZCY1hjOG9Qb3FPalVVZEhCOUU3WmNaS2hQejAwMDl3OSs1ZHpOZWJjRWZXcjE4UDRlSGhpTVByZEhvb2FES1pjRlZWMWF6T2EzQndFSnFibTRscDZlbnB0b0F4WXhwR294RzJiOThPWjgrZTVUUlVtemR2UmkwdExSQVFFRUJNWjhaS2hNejBwRERHV0lyZVZXNXVMbkgvblR0M2NGdGJHelhmOXUzYndkL2ZmMDZHZ21WbFpXQTJtOWtRa0NjUEhqeUErUGg0dUhUcEVxZWhTa3RMUTQyTmpad3lLV2FzUk1iUTBCQm9OQnJpUTJLeFdDUm5yRHc4UEp3Mk9ncUZBdDU2NnkxaTJyVnIxM0JQVDQvTDUzVHUzRG5pL3VEZ1lMUnAweWJXZ0tlaDErc2hKaVlHT2pzN09RM1ZCeDk4Z0txcnEySFJva1djeDJQR1NtUlVWVlhCNk9nb2R0YWJjRWVDZ29MZ3RkZGVJNlpWVjFmRHlNZ0lOUytYbHpNOUh1Z00zZDNkME5QVGcybERUNW1NUFU0MmVucDZJRFkyRm5RNkhkVlFJWVRRMGFOSDBWZGZmY1dyN2xqdGlneXVWL01zMFA1RUhJVHpMZW5hdFdzaE1qS1M2SldWbDVlN3BMbmkwbGJsNU9Td3htdmx5cFVyRUJzYkN3YURnV3FvUER3ODBIZmZmUWRGUlVXOGo4dU1sWWpRNlhUUTJkbEpUYSt0cmVYMEp0eVJsSlFVcXViS2tmR214YndHQndjeExVaE93MlF5QVMwNHYzSGpSbGkrZkRscndBQnc4ZUpGU0V4TWhNZVBIMU1ObGFlbko2cXJxNE4zM25uSHFXTXpZeVVpeXNyS0FITzg1aG9aR2NHMXRiV1NxaE11elZWcmF5dmN2bjJibWpjbkp3ZWVlZVlaUVFMdEdvMEdIang0d0FMckhIejk5ZGVRa1pFQlkyTmoxRGJzNStlSG1wdWJJU2tweWVuak0yTWxFbVpxcTF3WkprcHRLSWd4eGx4MUZoQVFZUHZPa0daOFpqMEVaTnFxU2JGblVWRVI3TisvbjFQc0dSd2NqRG82T21ERGhnMHVsY09NbFVpWXFhMmkwZGJXeHVsTnVDT3owVnpSREozSlpNTFYxZFc4eW1mYUtqbzJzZWV4WThjNDIrNnFWYXRRZTNzN2hJZUh1MXdXTTFZaUdnTHk3TVU0RmR6dWlxdWFxMjNidHMxYWM4V2xyYUlKVUtXQTBXaUU1T1JraDJKUHRWcU50Rm90dlBqaWk3TXFqeGtyRVVEVFZuRTlQRXh6eFc5b3JGQW9ZT2ZPbmNTMHJxNHVmT1BHRFpjN2twQ1FFTWxxcSs3ZHV3ZHhjWEhRMU5URWFhaFNVbExRbFN0WFFLVlN6YnBNWnF4RXdQbno1NG5hS2hwUzFWekZ4OGNUMHh5OUplVUtnRHZ5cnJxN3UrRzMzMzZqQnRhbE5ER2lEYjFlRHhzMmJJQnIxNjV4dHRrOWUvYWdtcG9haDJKUFpxemNZQWpvNit1TFhQRW0zQlZYNTdsU3FWU0FLRmFsb3FLQ09DdXBvM3VERUVLMG9hbTc4K0dISDhMTm16Y2RkcTR5bVF3OFBEd0VLNWNacTNuR05tOFZiZWpENVUyd2VhNzRHZS95OG5LcUpLUy92eDlmdm55Wm1HOXNiSXpOVzBWZ1ltS0MxeWpnN05tejBOSFJ3WXlWdTJDYnQ0cm1TZEFDdUVhamtXbXVwcUhWYW9sdlNUSEdEb2Q2dFBTNnVqcjQrKysvV1dEZFJUREcrTDMzM29OLy8vMlhHYXVGRHBlMktpSWlBcTFac3dhU2s1UEIxOWQzVGllVFcwalFqQVJOYzNYMTZsVzRkZXNXcHllZzBXamcwYU5IUkkrTUJOTlc4YWUzdHhlZk9IR0NHYXVGRHBlMmFzK2VQVlBlQkcwR2diYTJOcmgxNjVhazZreXRWbE0xVjlZdkFKdzI2R05qWTNielhQWDM5OE9QUC81SS9IOTZlanA0ZTN1ekJtemwrZWVmUnlkUG5rUzB1T0FubjN3Q2QrN2NZY1pxSVVON2tPUnlPY3JLeW5waU9PaU1OK0h1ME9wRHI5ZGpyVlk3OVh0MGRCUnFhbXA0RDhlbmMrN2NPV3BzaG4xZTh6OGhJU0dvdmIwZERodzRRUFY2UjBkSGNYNSt2aURqU3JZVTF6eHNqeDgvQms5UFQySWRKQ2NuMi8xLzVjcVZ4UDhHQndmRHhNU0VwSmJxTWhnTXRyZE1kdld4ZS9mdXFmOVpoM0dZNzNianhvMnB2QkVSRWNTOElTRWhrcWx2MmxKY3RpMHFLZ3I2Ky91bi9uLy8vbjN3OS9lbjVxbXRyWjNWK1REUGFwN2cwbGFSZW01YWI5N1gxL2VFTnlFRlhuamhCZXBiMHVuelhEa2IwN041cVYxZFhkRGIyMHU5TjJ6ZUtvQzR1RGlrMVdwaDZkS2xVL3RVS2hWOCtlV1gxRHdIRGh3Z0xnckxQQ3VSYnpFeE1jVHJWNmxVTURZMlp2Zi9nWUVCa012bHhEeTdkdTJTM0VLb1Zra0JzZjJVbHBiQzNidDNxZDRYYlFzS0NnS3oyUXpXSVl0ZE9rSUlmdi85ZDhuVU1jMnpTazFOSmJaUmpERllMQlpPajJ6Ly92M01zMXBJY0dtcnNyT3pRYWxVMnUwUERBeGttcXRwT05KY2xaYVdVbU5PYVdscHhId0dnd0UzTmpiQytmUG5pV1d5ZWFzbXljM05KYlpSQUFDRUVKdytmUnFVU2lXeGpyLzk5bHU0ZnYwNkM3QXZGQnhwcTV3TkxFdFZjMFY3UzZyVmF1SFVxVlBFdE5EUVVGUlNVZ0lLaFlMNE1PWG41ek50MVN3SkR3K0hJMGVPRU5NbUppYnd1KysreS9uVkFETldJb0dQdG9wR1Nrb0txRlFxcHJseVlMd3h4bmhnWUlEYUdmajcrOFBXclZ1SmVmdjcrNG41dkx5OFVGcGFHbXZBUENrc0xJU3dzREJpVzcxKy9UbytmZnEwOE1acWFHZ0lIajE2SlBnbWxLcDFvY0ZIVzBWRG9WQlFGZHhTMVZ5dFhMbVM5NWZFMCtkS2QxWitrSkdSd2RZRWRBS2xVZ2tsSlNYVWJ6SUxDd3ZCWURBNGQxQkhBZmI1Mk53NXdHNmRyc1R1bXVWeU9Rd01ERGpNMzlYVlJiMVhSNDhlbFZ5Zy9mUFBQK2ZkZHVQaTRxYnltVXdtMjJLYXZQSzJ0TFJJcm01cGdYS05SalByOWc0QWVNZU9IVTZkRHpOV0l0WlcwYmJWcTFjVGp5RkZ6ZFVmZi96Qis2MmZUZUZ1Mnc0ZE9zUXJYMmhvS0Znc0ZtYXNYREJXZi83NUovajYrbExydWFHaGdiME5GQ1BPYXF0b1dHVWZka2hSYzhVMXo5VjBGaTllYkJkejRsdm51Ym01a3B5M1NnaVdMRmxpODM2SjdOdTNENHhHSXd1d2l3MWFFRnlsVXFIRXhFU25Bc3R5dVp6TmMrV0UwY25JeUFBdkw2OG45a1ZGUmNFcnI3eUMrTWE1R0s2eGQrOWVpSW1KUWJRTzl2ang0OHhZaVFsWHRGVmN2ZFhycjc5T1RMdHc0UUxUWERsaDBCekpFWmkyYXZiSVpESTRjK1lNZFZtMDR1SmkrUFhYWDVteEVndXVhcXVjZmZpTVJpUG0rL0d1dThDbHVRS1kxRmJGeHNZUzA3S3lzcWdQRVI5anh1QkhSRVFFSER4NGtKaG1OcHR4UVVFQjV5cEZBQUJ5UjRYRXg4Y2paM3A5dnZ6eXl5K2N5MHU3RTdQUlZuRjVFeXFWQ3BFVzNpd3JLM01vZzNESG9XQkpTUWt4YmZmdTNkU1lVMEJBQUNRbUprSmRYWjFkbXJlM041dTNTa0NLaW9xZ3RyWVc2ZlY2dXpaNzllcFYvUDMzM3lQT2RzdStEWno3elRvdkV2RmFUNXc0NGZKeDMzLy9mZUp4cGZZTkc5Zk1GREtaRFByNitqanpXZWR2dDZ2SHZMdzh5ZFdoMEc4RFoyNU5UVTNVWjhIUHp3LysrdXN2OWpad1B1RTdiNVd6Y00yYXlkWVduQ1F1TGc2V0xWdkdtVy9yMXEzRXRRV2x1aURFWFBMR0cyOUFhbW9xMGMxOStQQWhwbjJtdzJKV1R3R3VOUUdUa3BJZ01ERFE1V092VzdjT1ZxOWVUZjM4Um1wckMrYms1Tml0TGNnbjVxUlFLR0JtcHhFYUdvcXNuZ1ZEWUw3NTVodDQ5dGxucWUyMnBhV0ZHYXY1UUNodEZkY0RTcUt2cncrM3RyWktxcTVuYXE1OGZIeFFhbW9xNzVqWFRLK0thYXZtaHFWTGw4S3hZOGVvbzRMOC9Id1lIeDlueGtvc1EwQi9mMytVbEpRa2lMRmltaXV5MGNuTXpMUjlNZUNRNk9ob2lJeU1SQUJNVy9VMDJMZHZIMFJIUnhQYnJVNm53OFhGeGN4WVBVMTBPaDFWVzdWejUwNVFLQlN6TGlNd01CQVNFaEtJYVJjdlhwU2s1c3EyR3BDenNnT2JnZHEwYVJQVFZzMHhIaDRlVUZKU0FyUkZmRC83N0RPN0QvT1pzWnBqcjRxbXJSSlN2OE8xdHFBVU5WZVptWm53OHNzdm8vWHIxN3ZrcGJJRklaNE9hOWV1aFlLQ0FtTGFQLy84ZzYxdnU1bXhtbXU0dEZWUlVWRXVhYXRvYk51MkRmejgvTmhRY05wUU1DOHZ6K21ZMDVJbFN5QTFOUlhZdkZWUGowOC8vUlNDZ29LSU42cTV1UmxQbjdWVkRqQ3BMazFJU0VDMG5tb3VpSXlNcEpZcHhQQm92cmw5K3phbzFXcFFxOVYyMXlpMDBGQ3BWRUpSVVJHMHQ3ZmJsWVVRZ3VIaFlVbk54YVJXcXlFc0xNeWx2S2RPbldMelZsbXByNjhIczlsczE2YUVYRFBSeDhjSGREb2RqSStQTzdRRnlKSEVuY0ZnTU1UQWY0UXFEQWZlUy9YWkFBQUFBRWxGVGtTdVFtQ0MiLz4KPC9kZWZzPgo8L3N2Zz4K"
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
