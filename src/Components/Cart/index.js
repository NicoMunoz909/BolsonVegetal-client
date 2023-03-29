import { FaMinus, FaPlus, FaTrashAlt, FaShoppingCart } from 'react-icons/fa'
import Item from '../../Assets/item.jpg'
import './Cart.css'
const Cart = ({items}) => {
    
  return (
    <div>
      <div className='cart-header'>
        <FaShoppingCart />
        <h2>Carrito</h2>
        <FaShoppingCart style={{transform: 'rotateY(180deg)'}}/>
      </div>
      {items.map( i => {
        return (
          <div className='cart-item'>
            <div className='cart-item__description' style={{fontSize: i.name.length > 10 ? '15px':'20px'}}>
              <p>{i.name} x {i.priceType}</p>
              <p>Cantidad: 1</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px'}}>
                <div>
                  <button className='cart-item__plus'><FaPlus/></button>
                  <button className='cart-item__minus'><FaMinus/></button>
                </div>
                <FaTrashAlt/>
              </div>
            </div>
            <p>${i.price}</p>
            <div>
              <img src={Item} alt="" />
            </div>
          </div>
        )
      })}
      <div className='cart-footer'>
        <p>Total: ${items.reduce((total, current) => total + parseFloat(current.price), 0)}</p>
        <a href="/checkout" style={{height: 'fit-content'}}><button style={{textDecoration: 'underline'}} className='cart-footer__checkout'>Ir a pagar</button></a>
      </div>
    </div>
    )
  }
  
  export default Cart