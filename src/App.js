import './App.css';
import BannerCarousel from './Components/BannerCarousel';
import BannerFooter from './Components/BannerFooter';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import ItemsCarouselHome from './Components/ItemsCarouselHome';
import Navbar from './Components/Navbar';
import SubscribeBanner from './Components/SubscribeBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerCarousel />
      <BannerFooter />
      <h2>Nuestros Productos</h2>
      <div className='titleUnderline'></div>
      <Categories />
      <h2>Los mas vendidos</h2>
      <div className='titleUnderline'></div>
      <ItemsCarouselHome />
      <h2>Ofertas de la semana</h2>
      <div className='titleUnderline'></div>
      <ItemsCarouselHome />
      <SubscribeBanner />
      <Footer />
    </div>
  );
}

export default App;
