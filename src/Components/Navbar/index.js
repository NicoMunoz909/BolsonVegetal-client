import './Navbar.css'
import logoSvg from "../../Assets/logo.svg"
import { FaBars, FaShoppingCart, FaHome, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {

  const toggleContent = () => {
    const content = document.getElementById('content');
    content.classList.toggle('hmenu-visible');
    
    const modal = document.getElementById('modal');
    modal.classList.toggle('hmenu-opaque');

    const links = document.getElementById('links');
    links.classList.toggle('hmenu-translateX')
  }

  return (
    <div className='navContainer'>
      <div className='navContent' id='content'>
        <div className='navModal' id='modal' onClick={toggleContent}>
          <RxCross1 className='hmenu-close'/>
        </div>
        <div className='navLinks' id='links'>
          <div className='hmenu-header' style={{border: 'none'}}>
            <img src={logoSvg} alt="" />
          </div>
          <div>
            <a href="" style={{display: 'flex', justifyContent: 'space-between' , alignItems: 'center', width: '100%'}}>
              <h2>Inicio</h2>
              <FaHome></FaHome>
            </a>
          </div>
          <div>
            <h2>Productos</h2>
            <a href="/bolsones">Bolsones</a>
            <a href="/frutas">Frutas</a>
            <a href="/verduras">Verduras</a>
            <a href="/dietetica">Dietetica</a>
            <a href="/congelados">Congelados</a>
            <a href="/almacen">Almacen</a>
            <a href="/bebidas">Bebidas</a>
            <a href="/ofertas">Ofertas</a>
          </div>
          <div style={{border: 'none'}}>
            <h2>Informacion</h2>
            <a href="/nosotros">Quienes Somos</a>
            <a href="/contacto">Contacto</a>
            <a href="/como-comprar">¿Como comprar?</a>
            <a href="/envios">Envios</a>
            <a href="/faq">Preguntas Frecuentes</a>
          </div>
          <div className='navBar-footer'>
            <div style={{border: 'none'}}>
              <FaInstagram /> <FaWhatsapp />
            </div>
            <p style={{margin: '0'}}>El Bolson Vegetal</p>
          </div>
        </div>
      </div>
      <div className='navBar'>
        <div>
          <FaBars onClick={toggleContent}/>
        </div>
        <a href="/"><img src={logoSvg} alt="" /></a>
        <div className='cartContainer'>
          <p className='itemCount'>0</p>
          <a href="carrito">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar