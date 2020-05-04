import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { IoMdSearch } from 'react-icons/io';

import './styles.css';

export default function SearchField() {
  var resultAreaElement = document.getElementsByClassName('result-area');
  const data = useStaticQuery(graphql`
    query dataShopify {
      allShopifyProduct {
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
                    ...GatsbyImageSharpFluid
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
  `);

  const emptyQuery = '';
  const [ state, setState ] = useState({
    filteredData: [],
    query: emptyQuery
  });
  const [ teste, setTeste ] = useState(false);

  useEffect(
    () => {
      if (state.filteredData.length > 0) {
        setTeste(true);
      } else {
        setTeste(false);
      }
    },
    [ state.filteredData ]
  ); // Only re-run the effect if count changes

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    const query = event.target.value;
    // const { data } = props;
    // this is how we get all of our posts
    const posts = data.allShopifyProduct.edges || [];
    // return all filtered posts
    const filteredData = posts.filter((post) => {
      // destructure data from post frontmatter
      const { id, title } = post.node;
      if (query.length >= 3) {
        resultAreaElement[0].style.display = 'grid';
        return (
          // standardize data with .toLowerCase()
          // return true if the description, title or tags
          // contains the query string
          title.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        resultAreaElement[0].style.display = 'none';
      }
    });
    // update state according to the latest query and results
    if (query) {
      setState({
        query, // with current query string from the `Input` event
        filteredData // with filtered data from posts.filter(post => (//filteredData)) above
      });
    } else {
      setState({
        query, // with current query string from the `Input` event
        filteredData: [] // with filtered data from posts.filter(post => (//filteredData)) above
      });
    }
  };

  const formattedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <React.Fragment>
      <div className="search-section">
        <input
          type="text"
          aria-label="Search"
          placeholder="O QUE VOCÊ PROCURA?"
          onChange={handleInputChange}
        />
        <IoMdSearch size={32} />
      </div>
      <div className="result-area">
        {state.filteredData.map((data) => {
          return (
            <div key={data.node.shopifyId}>
              <Img
                fluid={data.node.images[0].localFile.childImageSharp.fluid}
                alt="An image apresentation of current product"
              />
              <div className="info-item">
                <div className="info-text">
                  <h4>{data.node.title}</h4>
                  <p>{formattedNumber.format(data.node.priceRange.minVariantPrice.amount)}</p>
                </div>
                <Link to={`/produto/${data.node.handle}`}>Ver Produto</Link>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
