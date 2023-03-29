import './Checkout.css'

const Checkout = () => {
  return (
    <div>
      <form action="">
        <h2>Datos y direccion</h2>
        <div className='formField'>
          <label htmlFor="name">Nombre y apellido</label>
          <input type="text" name="name" id="name" />
        </div>
        <div style={{display: 'flex'}}>
          <div className='formField'>
            <label htmlFor="street">Calle</label>
            <input type="text" name="street" id="street" />
          </div>
          <div className='formField' style={{width: '20%'}}>
            <label htmlFor="streetNumber">Número</label>
            <input type="text" name="streetNumber" id="streetNumber" />
          </div>
          <div className='formField' style={{width: '20%'}}>
            <label htmlFor="apartment">Depto</label>
            <input type="text" name="apartment" id="apartment" />
          </div>
        </div>
        <div className='formField'>
          <label htmlFor="phone">Telefono</label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <h2>Dia y hora de entrega</h2>
        <p>Nuestros horarios de entrega son</p>
        <p>Lunes a Viernes: 17 a 20:30</p>
        <p>Sabados: 10 a 14</p>
        <p>Si necesitas coordinar la entrega para algun horario especifico dentro de ese rango especificalo acá</p>
        <div style={{display: 'flex', justifyContent: 'space-around', textAlign: 'left'}}>
          <div>
            <input type="radio" name="day" id="day-monday" />
            <label htmlFor="day-lunes"> Lunes</label> <br />
            <input type="radio" name="day" id="day-tuesday" />
            <label htmlFor="day-tuesday"> Martes</label> <br />
            <input type="radio" name="day" id="day-wednesday" />
            <label htmlFor="day-wednesday"> Miercoles</label> <br />
            <input type="radio" name="day" id="day-thursday" />
            <label htmlFor="day-thursday"> Jueves</label> <br />
            <input type="radio" name="day" id="day-friday" />
            <label htmlFor="day-friday"> Viernes</label> <br />
            <input type="radio" name="day" id="day-saturday" />
            <label htmlFor="day-saturday"> Sábado</label> <br />
          </div>
          <div style={{textAlign: 'right'}}>
            <div>
              <label htmlFor="time-from">De </label>
              <input type="time" name="time" id="time-from" defaultValue='17:00'/>
            </div>
            <div>
              <label htmlFor="time-to">A </label>
              <input type="time" name="time" id="time-to" defaultValue='20:30'/>
            </div>
          </div>
        </div>
        <div className="formField">
          <label htmlFor="instructions">Instrucciones para la entrega</label>
          <textarea name="instructions" id="instructions" cols="50" rows="5"></textarea>
        </div>
        <button onClick={e => e.preventDefault()} type="submit">Completar pedido</button>
      </form>
    </div>
    )
  }
  
  export default Checkout