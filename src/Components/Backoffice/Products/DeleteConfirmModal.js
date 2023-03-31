import { FaCheck, FaTimes } from 'react-icons/fa'


const DeleteConfirmModal = ({ item, onConfirm, onCancel }) => {
  return (
    <div className="products-modal__background">
      <div className="products-modal__container">
        <h2 className="products-modal__header">Eliminar</h2>
        <form action="">
          <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>¿Eliminar producto?</p>
          <div style={{display: 'flex'}}>
            <button onClick={onConfirm} type="submit"><FaCheck /></button>
            <button onClick={onCancel} style={{backgroundColor: 'red '}}><FaTimes /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DeleteConfirmModal