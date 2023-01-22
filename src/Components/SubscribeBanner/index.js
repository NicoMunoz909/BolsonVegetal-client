import React from 'react'
import banner from '../../Assets/subscribe-banner.jpg'
import './subscribeBanner.css'

const SubscribeBanner = () => {
  return (
    <div className='subBanner'>
      <form>
        <p>Suscribite a nuestra lista de difusion</p>
        <label htmlFor="nombre"></label>
        <input type="text" placeholder='Nombre'/>
        <label htmlFor="telefono"></label>
        <input type="phone" placeholder='Telefono'/>
        <button>Suscribirme!</button>
      </form>
      <div className='imgContainer' id='imgContainer'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default SubscribeBanner