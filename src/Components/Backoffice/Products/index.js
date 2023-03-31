import './Products.css'
import * as data from '../../../data'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { CgUnavailable } from 'react-icons/cg'
import itemImg from '../../../Assets/item.jpg'
import { useState } from 'react'
import EditingModal from './EditingModal'

const Products = () => {

  const [editing, setEditing] = useState(false)
  const [selectedItem, setSelectedItem] = useState(undefined)

  const handleEdit = (e) => {
    e.preventDefault()
    setEditing(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setEditing(false)
  }
  
  const productsArray = [data.Almacen, data.Bebidas, data.Bolsones, data.Congelados, data.Dietetica, data.Frutas, data.Verduras, data.Ofertas]

  return (
    <div>
      {editing && <EditingModal item={selectedItem} onConfirm={handleEdit} onCancel={handleCancel}/>}
      <h1 className='backoffice-header'>Gestor de catálogo</h1>
      {productsArray.map(category => category.map(item => {
        return (
        <div className='products-itemContainer'>
          <div className="products-itemImgContainer"><img src={itemImg} alt="" /></div>
          <p>{item.name}</p>
          <p>Precio: {item.price} X {item.priceType}</p>
          <div className="products-itemActions">
            <button onClick={() => {setSelectedItem(item); setEditing(true)}}>
              <FaEdit />
            </button>
            <button>
              <CgUnavailable />
            </button>
            <button>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      )
      }))}
    </div>
    )
  }
  
  export default Products