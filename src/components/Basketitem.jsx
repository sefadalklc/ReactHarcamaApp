import React from 'react'

export default function Basketitem({item, product}) {
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}
