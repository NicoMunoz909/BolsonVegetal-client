import './App.css';
import BannerCarousel from './Components/BannerCarousel';
import BannerFooter from './Components/BannerFooter';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerCarousel />
      <BannerFooter />
    </div>
  );
}

export default App;
