import './Products.css'
import * as data from '../../../data'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import itemImg from '../../../Assets/item.jpg'
import { useState } from 'react'
import EditingModal from './EditingModal'
import DeleteConfirmModal from './DeleteConfirmModal'

const Products = () => {

  const [editing, setEditing] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [selectedItem, setSelectedItem] = useState(undefined)

  const handleEdit = (e) => {
    e.preventDefault()
    setEditing(false)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setDeleteConfirm(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setEditing(false)
    setDeleteConfirm(false)
  }

  const handleStockSwitch = (e,item) => {
    e.target.classList.toggle('switchInner__off')
  }
  
  const productsArray = [data.Almacen, data.Bebidas, data.Bolsones, data.Congelados, data.Dietetica, data.Frutas, data.Verduras, data.Ofertas]

  return (
    <div>
      {editing && <EditingModal item={selectedItem} onConfirm={handleEdit} onCancel={handleCancel}/>}
      {deleteConfirm && <DeleteConfirmModal item={selectedItem} onConfirm={handleDelete} onCancel={handleCancel}/>}
      <h1 className='backoffice-header'>Gestor de catálogo</h1>
      {productsArray.map(category => category.map(item => {
        return (
        <div className='products-itemContainer'>
          <div className="products-itemImgContainer"><img src={itemImg} alt="" /></div>
          <p>{item.name}</p>
          <p>Precio: {item.price} X {item.priceType}</p>
          <div className="products-itemActions">
            <div>
              <button onClick={() => {setSelectedItem(item); setEditing(true)}}>
                <FaEdit />
              </button>
              <button onClick={() => {setSelectedItem(item); setDeleteConfirm(true)}}>
                <FaTrashAlt />
              </button>
            </div>
            <div className='switchContainer'>
              <div className='switchOutter'>
                <div className='switchInner' onClick={(e) => handleStockSwitch(e,item)}></div>
              </div>
              <p style={{width:'50px' ,margin: '0px', fontSize: '14px', textAlign: 'center', textTransform: 'uppercase'}}>stock</p>
            </div>
          </div>
        </div>
      )
      }))}
    </div>
    )
  }
  
  export default Products