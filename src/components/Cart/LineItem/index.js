import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Link } from 'gatsby'
import { MdClose } from 'react-icons/md'
import './styles.css'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }
  console.log(line_item)
  return (
    <tr>
      <td>
        <div className="product-cell">
          {variantImage}
          <Link to={`/produto/${line_item.variant.product.handle}`}>
            {' '}
            {line_item.title}
          </Link>
        </div>
      </td>
      <td>{line_item.variant.price}</td>
      <td>{line_item.quantity}</td>
      <td>{(line_item.quantity * line_item.variant.price).toFixed(2)}</td>
      <td>
        <MdClose size={16} onClick={handleRemove} />
      </td>
    </tr>
  )
}

export default LineItem
