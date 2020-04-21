import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Img from "gatsby-image"
import { FiShoppingBag } from "react-icons/fi"
import "./styles.css"
const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <Seo title={product.title} />
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
            <h3>R$ {product.priceRange.minVariantPrice.amount},00</h3>
            <h4>Descrição do Produto</h4>
            <p>{product.description}</p>
          </div>
          <div className="product-lenght">
            <h4>{product.options.name}</h4>
            <div className="lenght">
              <a href="#">{product.options.values[0]}</a>
              <a href="#">{product.options.values[1]}</a>
              <a href="#">{product.options.values[2]}</a>
              <a href="#">{product.options.values[3]}</a>
              <a href="#">{product.options.values[4]}</a>
            </div>
          </div>
          <div className="product-footer">
            <h4>Quantidade</h4>
            <div className="quantity">
              <a href="#">- 1 +</a>
            </div>
            <a href="#">
              Adicionar ao Carrinho <FiShoppingBag />
            </a>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
export default ProductTemplate
