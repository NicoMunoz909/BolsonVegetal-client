import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Backoffice = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
  
export default Backoffice