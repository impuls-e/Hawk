import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

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

  return (
    <Wrapper>
      <section>
        {variantImage}
        <div>
          <p>
            {line_item.title}
            {`  `}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}
          </p>
          <p>{selectedOptions}</p>
          <p>Quantidade: {line_item.quantity}</p>
        </div>
      </section>
      <button onClick={handleRemove}>Remover</button>
    </Wrapper>
  )
}

export default LineItem
