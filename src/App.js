import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Contexts/CartContext";

function App({ isLoading }) {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: "75px" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
