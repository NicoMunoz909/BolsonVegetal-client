import React from 'react'
import './BannerFooter.css'
import { FaTruck, FaDollarSign, FaCreditCard } from 'react-icons/fa'

const BannerFooter = () => {
  return (
    <div className='bannerFooter'>
      <div>
        <FaTruck />
        <div>
          <h3>Envio gratis</h3>
          <p>En compras mayores a $1000 dentro la zona seleccionada.</p>
          <a href="/envios" style={{textDecoration: 'underline',}}>Ver zonas de envio.</a>
        </div>
      </div>
      <div>
        <FaDollarSign />
        <div>
          <h3>Compra asegurada</h3>
          <p>Recibí los productos que esperabas o te devolvemos el dinero.</p>
        </div>
      </div>
      <div>
        <FaCreditCard />
        <div>
          <h3>Todos los medios de pago</h3>
          <p>Crédito, débito, transferencía, billetera Santa Fé, Mercado Pago.</p>
        </div>
      </div>
    </div>
  )
}

export default BannerFooter