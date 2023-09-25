import React, { useState } from 'react'
import banner from '../../Assets/subscribe-banner.jpg'
import './subscribeBanner.css'

const SubscribeBanner = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

  const encodedText =  `Hola! Quisiera suscribirme a la lista de difusion.
Nombre: ${name}
Telefono: ${phoneNumber}
Muchas Gracias!`

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/543413814984?text=${encodeURIComponent(encodedText)}`)
    e.target.reset()
  }

  return (
    <div className='subBanner'>
      <form onSubmit={handleSubmit}>
        <p>Suscribite a nuestra lista de difusion</p>
        <label htmlFor="nombre"></label>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Nombre y apellido' required/>
        <label htmlFor="telefono"></label>
        <input onChange={(e) => setPhoneNumber(e.target.value)} type="phone" placeholder='Teléfono' required/>
        <button type='submit'>Suscribirme!</button>
      </form>
      <div className='imgContainer' id='imgContainer'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default SubscribeBanner