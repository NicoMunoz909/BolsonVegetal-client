import construction from '../../Assets/under-construction.png'
import './underConstruction.css'

const UnderConstruction = () => {
  return (
    <div className='underConstruction'>
        <h1>Esta página aún esta en construcción</h1>
        <img src={construction} alt="" />
        <a href="/">Volver al inicio</a>
    </div>
  )
}

export default UnderConstruction