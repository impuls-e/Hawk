import React from "react"
import "./styles.css"

import Product from "../Product"
export default function ProductCatalog() {
  return (
    <div className="container catalog">
      <h3>Produtos</h3>
      <div className="options">
        <h4>Camisetas</h4>
        <h4>Calças</h4>
        <h4>Shorts</h4>
        <h4>Acessórios</h4>
      </div>
      <div className="products">
        <Product />
      </div>
    </div>
  )
}
