import { FaCheck, FaTimes } from 'react-icons/fa'
import itemImg from '../../../Assets/item.jpg'

const EditingModal = ({ item, onConfirm, onCancel }) => {
  return (
    <div className="products-modal__background">
      <div className="products-modal__container">
        <h2 className="products-modal__header">{item ? 'Editar' : 'Agregar'}</h2>
        <form action="">
          <div className='products-modal__imgContainer'>
            <img src={itemImg} alt="" />
          </div>
          <div className='products-modal__formField'>
            <label htmlFor="name">Nombre</label>
            <div><input type="text" name="name" id="name" defaultValue={item ? item.name : ''}/></div>
          </div>
          <div className='products-modal__formField'>
            <label htmlFor="price">Precio</label>
            <div>
              <input type="number" name="price" id="price" defaultValue={item ? item.price : ''}/>
              <label style={{margin: '10px'}} htmlFor="priceType">X</label>
              <select name="priceType" id="priceType" required>
                <optgroup>
                  <option value="" disabled selected={!item}>???</option>
                  <option value="100G" selected={(item && item.priceType === '100G') ? true : false}>100G</option>
                  <option value="¼KG" selected={(item && item.priceType === '¼KG') ? true : false}>¼KG</option>
                  <option value="½KG" selected={(item && item.priceType === '½KG') ? true : false}>½KG</option>
                  <option value="KG" selected={(item && item.priceType === 'KG') ? true : false}>KG</option>
                  <option value="U" selected={(item && item.priceType === 'U') ? true : false}>U</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="products-modal__formField">
            <input type="checkbox" name="tags" id="tags-agro" value='agroecologico' defaultChecked={(item && item.tags.includes('agroecologico')) ? true : false}/>
            <label htmlFor="tags-agro">Agroecologico</label> <br />
            <input type="checkbox" name="tags" id="tags-oferta" value='oferta' defaultChecked={(item && item.tags.includes('oferta')) ? true : false} />
            <label htmlFor="tags-oferta">Oferta</label>
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