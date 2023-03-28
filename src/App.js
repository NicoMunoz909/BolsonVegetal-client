import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop: '75px'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
    );
  }
  
  export default App;
  