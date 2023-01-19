import React from 'react'
import './Categories.css'
import category from '../../Assets/category.png'

const Categories = (props) => {

  const categories = ['Bolsones', 'Frutas', 'Verduras', 'Dietetica', 'Almacen', 'Congelados', 'Bebidas', 'Ofertas']

  return (
    <div>
      <h2>{props.title}</h2>
      <div className='categories'>
        {categories.map( (i) => {
          return (
            <div className='category'>
              <p>categoría</p>
              <img src={category} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories