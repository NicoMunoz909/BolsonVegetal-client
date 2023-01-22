import React from 'react'
import './footer.css'
import {FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div>
        <h3>Informacion</h3>
        <a href='/nosotros'>Acerca de nostros</a>
        <a href='/envios'>Costos y formas de envío</a>
        <a href='/como-comprar'>Como comprar</a>
        <a href='/faq'>Preguntas frecuentes</a>
      </div>
      <div>
        <h3>Contacto</h3>
        <p><FaWhatsapp></FaWhatsapp> 3413814984</p>
        <p><FaMapMarkerAlt></FaMapMarkerAlt> Av. Francia 1590, Rosario, Argentina</p>
        <p><FaMapMarkerAlt></FaMapMarkerAlt> Zeballos 1879, Rosario, Argentina</p>
        <p><FaMapMarkerAlt></FaMapMarkerAlt> Alem 1653, Rosario, Argentina</p>
      </div>
      <div>
        <h3>Seguinos</h3>
        <a href="https://www.instagram.com/bolsonvegetal/" target='_blank' rel="noreferrer"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Footer