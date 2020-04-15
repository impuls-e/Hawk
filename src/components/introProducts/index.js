import React from "react"
import "./styles.css"
import Img from "gatsby-image"

export default function introProducts({ title, description, value, imgUrl }) {
  console.log(imgUrl)
  return (
    <div className="intro-projects">
      <section>
        <div className="img-main">
          <img
            src={`http://localhost:8000/${imgUrl.childImageSharp.fluid.src}`}
            alt="product image"
          />
        </div>
        <div className="imgs-body">
          <img
            src={`http://localhost:8000/${imgUrl.childImageSharp.fluid.src}`}
            alt="product image"
          />
          <img
            src={`http://localhost:8000/${imgUrl.childImageSharp.fluid.src}`}
            alt="product image"
          />
          <img
            src={`http://localhost:8000/${imgUrl.childImageSharp.fluid.src}`}
            alt="product image"
          />
        </div>
      </section>
      <aside>
        <div className="description">
          <h1>{title}</h1>
          <span>{value}</span>
          <h2>Descrição</h2>
          <p>{description}</p>
        </div>
        <div className="product-lenght">
          <h2>Tamanho</h2>
          <div className="lenght">
            <a href="#">P</a>
            <a href="#">M</a>
            <a href="#">G</a>
            <a href="#">GG</a>
            <a href="#">EG</a>
          </div>
        </div>
        <div className="product-footer">
          <h2>Quantidade</h2>
          <a href="#">1</a>
          <a href="#">Comprar</a>
        </div>
      </aside>
    </div>
  )
}
