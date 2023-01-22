import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import './ItemsCarouselHome.css'
import Item from '../../Assets/item.jpg'

const ItemsCarouselHome = () => {

  const items = [{name: 'Naranja de jugo', price: '250', priceType: 'KG'}, {name: 'Banana boliviana', price: '320', priceType: 'KG'}, {name: 'Palta Hass', price: '300', priceType: 'U'}, {name: 'Champignon', price: '250', priceType: '100G'}]

  return (
    <div className='itemsCarouselContainer'>
      <div className='carouselHandler left'>
        <FaChevronCircleLeft />
      </div>
      <div className='itemsContainer'>
        {items.map( (i) => {
          return (
            <div className='itemContainer' id='items-container'>
              <div className='item'>
                <img src={Item} alt={i.name} />
                <h3>{i.name}</h3>
                <p>${i.price} x {i.priceType}</p>
                <button>Añadir al carrito</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='carouselHandler right'>
        <FaChevronCircleRight />
      </div>
    </div>
  )
}

export default ItemsCarouselHome