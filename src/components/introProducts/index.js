import React from "react"
import "./styles.css"
import Img from "gatsby-image"
import { FiShoppingBag } from "react-icons/fi"

export default function introProducts({ title, description, value, imgUrl }) {
  return (
    <div className="intro-projects">
      <section>
        <div className="img-main">
          <img
            src={`http://localhost:8000/static/2e86485e9b61f0a92f09ac7e376751f4/c2da5/tshirt-black.png`}
            alt="Imagem do produto em destaque"
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
          <h1>{title}</h1>
          <h3>R$ {value},00</h3>
          <h4>Descrição do Produto</h4>
          <p>{description}</p>
        </div>
        <div className="product-lenght">
          <h4>Tamanho</h4>
          <div className="lenght">
            <a href="#">P</a>
            <a href="#">M</a>
            <a href="#">G</a>
            <a href="#">GG</a>
            <a href="#">EG</a>
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
  )
}
