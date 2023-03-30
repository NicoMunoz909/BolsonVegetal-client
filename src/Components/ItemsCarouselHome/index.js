import React, { useContext } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import './ItemsCarouselHome.css'
import Item from '../../Assets/item.jpg'
import { CartDispacthContext } from '../../Contexts/CartContext'

const ItemsCarouselHome = ({ id }) => {

  const dispatch = useContext(CartDispacthContext);

  const items = [{name: 'Naranja de jugo', price: '250', priceType: 'KG'}, {name: 'Banana boliviana', price: '320', priceType: 'KG'}, {name: 'Palta Hass', price: '300', priceType: 'U'}, {name: 'Champignon', price: '250', priceType: '100G'}]

  let translatePercentage = 0;

  const translateLeft = () => {
    const itemsContainer = document.getElementById(id);
    if (translatePercentage > 0) {
      itemsContainer.style.transform = `translateX(-${translatePercentage - 100}%)`
      translatePercentage -= 100
    } else {
      itemsContainer.style.transform = `translateX(${translatePercentage + 10}%)`
      setTimeout(() => {itemsContainer.style.transform = `translateX(-${0}%)`}, 100)
    }
  }

  const translateRight = () => {
    const itemsContainer = document.getElementById(id);
    if (translatePercentage < 300) {
      itemsContainer.style.transform = `translateX(-${translatePercentage + 100}%)`
      translatePercentage += 100
    } else {
      itemsContainer.style.transform = `translateX(-${translatePercentage + 10}%)`
      setTimeout(() => {itemsContainer.style.transform = `translateX(-${300}%)`}, 100)
    }
  }

  return (
    <div className='itemsCarouselContainer'>
      <div className='carouselHandler left'>
        <FaChevronCircleLeft onClick={translateLeft}/>
      </div>
      <div className='itemsContainer' id={id}>
        {items.map( (i) => {
          return (
            <div className='itemContainer'>
              <div className='item'>
                <img src={Item} alt={i.name} />
                <h3>{i.name}</h3>
                <p>${i.price} x {i.priceType}</p>
                <button onClick={() => dispatch({type: 'ADD', item: i})}>Añadir al carrito</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className='carouselHandler right'>
        <FaChevronCircleRight onClick={translateRight}/>
      </div>
    </div>
  )
}

export default ItemsCarouselHome