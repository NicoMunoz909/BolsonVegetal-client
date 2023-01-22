import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ShoppingPage from './Components/ShoppingPage';

function App() {

  const products = [{name: 'Naranja de jugo', price: '250', priceType: 'KG'}, {name: 'Banana boliviana', price: '320', priceType: 'KG'}, {name: 'Palta Hass', price: '300', priceType: 'U'}, {name: 'Champignon', price: '250', priceType: '100G'}]

  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop: '65px'}}>
        {false && <Home />}
        <ShoppingPage titulo='Frutas' filtros={['Agroecologico', 'Citricos']} products={products}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
