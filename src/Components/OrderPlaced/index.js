import Logo from '../../Assets/logo.svg'
import './OrderPlaced.css'

const OrderPlaced = () => {
  return (
    <div className='order-placed'>
      <h1>! Muchas gracias por tu pedido !</h1>
      <p>Te responderemos a la brevedad</p>
      <img src={Logo} alt="" />
      <a href="/">Volver al inicio</a>
    </div>
    )
  }
  
  export default OrderPlaced