import { FaCheck, FaCross, FaTimes } from 'react-icons/fa'
import itemImg from '../../../Assets/item.jpg'

const EditingModal = ({ item, onConfirm, onCancel }) => {
  return (
    <div className="products-modal__background">
      <div className="products-modal__container">
        <h2 className="products-modal__header">Editar</h2>
        <form action="">
          <div className='products-modal__imgContainer'>
            <img src={itemImg} alt="" />
          </div>
          <div className='products-modal__formField'>
            <label htmlFor="name">Nombre</label>
            <div><input type="text" name="name" id="name" defaultValue={item.name}/></div>
          </div>
          <div className='products-modal__formField'>
            <label htmlFor="price">Precio</label>
            <div>
              <input type="number" name="price" id="price" defaultValue={item.price}/>
              <label style={{margin: '10px'}} htmlFor="priceType">X</label>
              <select name="priceType" id="priceType">
                <optgroup>
                  <option value="100G" selected={item.priceType === '100G'}>100G</option>
                  <option value="¼KG" selected={item.priceType === '¼KG'}>¼KG</option>
                  <option value="½KG" selected={item.priceType === '½KG'}>½KG</option>
                  <option value="KG" selected={item.priceType === 'KG'}>KG</option>
                  <option value="U" selected={item.priceType === 'U'}>U</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className='products-modal__formField'>
            <label htmlFor="file">Imagen</label>
            <div><input type="file" name="itemImg" id="itemImg" /></div>
          </div>
          <div style={{display: 'flex'}}>
            <button onClick={onConfirm} type="submit"><FaCheck /></button>
            <button onClick={onCancel} style={{backgroundColor: 'red '}}><FaTimes /></button>
          </div>
        </form>
      </div>
    </div>
  )
}
  
export default EditingModal