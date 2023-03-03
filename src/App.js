import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { ItemCountContext } from './Contexts/ItemCountContext';

function App() {
  return (
    <ItemCountContext.Provider value={0} >
      <div className="App">
        <Navbar />
        <div style={{marginTop: '65px'}}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ItemCountContext.Provider>
  );
}

export default App;
