import React from 'react'
import Basketitem from './Basketitem'

const Basket = (props) => {
  return (
    <div>
        {
            props.basket.map(item => (
                <Basketitem  item={item} product={props.products.find( p => p.id === item.id)} />
            )) }
            <div>
              Toplam: ${props.total}
            </div>
    </div>
  )
}

export default Basket