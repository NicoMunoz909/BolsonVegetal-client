import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop: '65px'}}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
