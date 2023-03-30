import './Navbar.css'
import logoSvg from '../../../Assets/logo.svg'
import { IoMdPricetags, IoMdBrowsers } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div style={{margin: '30px auto',width: '10vw'}} className='navbar-header'>
        <a href="/backoffice"><img src={logoSvg} alt="" /></a>
      </div>
      <div className='navbar-links'>
        <a href="/backoffice/productos"><IoMdPricetags /> Gestor de catálogo</a>
        <a href="/backoffice/productos"><IoMdBrowsers /> Gestor de página web</a>
        </div>
    </div>
  )
}
  
  export default Navbar