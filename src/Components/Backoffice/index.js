import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import './Backoffice.css'

const Backoffice = () => {
  return (
    <div>
      <Navbar />
      <div style={{marginLeft: '25vw'}}>
        <Outlet />
      </div>
    </div>
  )
}
  
export default Backoffice