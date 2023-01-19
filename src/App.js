import './App.css';
import BannerCarousel from './Components/BannerCarousel';
import BannerFooter from './Components/BannerFooter';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerCarousel />
      <BannerFooter />
      <h2>Nuestros Productos</h2>
      <div className='titleUnderline'></div>
      <Categories />
    </div>
  );
}

export default App;
