import React, { useState } from "react"
import "./styles.css"

import Product from "../Product"
export default function ProductCatalog() {
  const [product, setProduct] = useState("tshirt")
  const [tshirt, setTshirt] = useState("active")
  const [pants, setPants] = useState("")
  const [short, setShort] = useState("")
  const [accessories, setAccessories] = useState("")

  function toggleTshirt(value) {
    setTshirt(tshirt === "" ? "active" : "active")
    setPants("")
    setShort("")
    setAccessories("")
    setProduct(value)
  }
  function togglePants(value) {
    setPants(pants === "" ? "active" : "active")
    setTshirt("")
    setShort("")
    setAccessories("")
    setProduct(value)
  }
  function toggleShorts(value) {
    setShort(short === "" ? "active" : "active")
    setTshirt("")
    setPants("")
    setAccessories("")
    setProduct(value)
  }
  function toggleAccessories(value) {
    setAccessories(accessories === "" ? "active" : "active")
    setTshirt("")
    setPants("")
    setShort("")
    setProduct(value)
  }
  return (
    <div className="container catalog">
      <h3>Produtos</h3>
      <div className="options">
        <a className={`${tshirt}`} onClick={e => toggleTshirt("tshirt")}>
          Camisetas
        </a>
        <a className={`${pants}`} onClick={e => togglePants("pants")}>
          Calças
        </a>
        <a className={`${short}`} onClick={e => toggleShorts("short")}>
          Shorts
        </a>
        <a
          className={`${accessories}`}
          onClick={e => toggleAccessories("accessories")}
        >
          Acessórios
        </a>
      </div>
      <div className="products">
        <Product product={product} />
      </div>
    </div>
  )
}
