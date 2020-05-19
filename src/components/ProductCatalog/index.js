import React, { useState, useEffect } from 'react'
import './styles.css'

import Product from '../Product'
export default function ProductCatalog() {
  const [ product, setProduct ] = useState('tshirt')
  const [ tshirt, setTshirt ] = useState('active')
  const [ pants, setPants ] = useState('')
  const [ Moleton, setMoleton ] = useState('')
  const [ accessories, setAccessories ] = useState('')

  function toggleTshirt(value) {
    setTshirt(tshirt === '' ? 'active' : 'active')
    setPants('')
    setMoleton('')
    setAccessories('')
    setProduct(value)
  }
  function togglePants(value) {
    setPants(pants === '' ? 'active' : 'active')
    setTshirt('')
    setMoleton('')
    setAccessories('')
    setProduct(value)
  }
  function toggleMoletons(value) {
    setMoleton(Moleton === '' ? 'active' : 'active')
    setTshirt('')
    setPants('')
    setAccessories('')
    setProduct(value)
  }
  function toggleAccessories(value) {
    setAccessories(accessories === '' ? 'active' : 'active')
    setTshirt('')
    setPants('')
    setMoleton('')
    setProduct(value)
  }

  return (
    <div
      className="container catalog"
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <h3>Produtos</h3>
      <div className="options">
        <button className={`${tshirt}`} onClick={(e) => toggleTshirt('tshirt')}>
          Camisetas
        </button>
        <button className={`${pants}`} onClick={(e) => togglePants('pants')}>
          Calças
        </button>
        <button className={`${Moleton}`} onClick={(e) => toggleMoletons('Moleton')}>
          Moletons
        </button>
        <button className={`${accessories}`} onClick={(e) => toggleAccessories('accessories')}>
          Acessórios
        </button>
      </div>
      <div className="products">
        <Product product={product} />
      </div>
    </div>
  )
}
