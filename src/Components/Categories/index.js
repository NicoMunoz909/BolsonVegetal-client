import React from 'react'
import './Categories.css'
import category from '../../Assets/category.png'

const Categories = (props) => {

  const categories = ['bolsones', 'frutas', 'verduras', 'dietetica', 'almacen', 'congelados', 'bebidas', 'ofertas']

  return (
    <div>
      <h2>{props.title}</h2>
      <div className='categories'>
        {categories.map( (i) => {
          return (
            <div className='category'>
              <a href={i}>
                <p>{i}</p>
                <img src={category} alt="" />
              </a>  
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories