import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Backoffice from "./Components/Backoffice";
import Products from "./Components/Backoffice/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import OrderPlaced from "./Components/OrderPlaced";
import ShoppingPage from "./Components/ShoppingPage";
import UnderConstruction from "./Components/UnderConstruction";
import * as data from './data.js'

const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="backoffice" element={<Backoffice />}>
            <Route path="productos" element={<Products />}></Route>
            <Route path="pagina" element={<h1>Página Web</h1>}></Route>
          </Route>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="bolsones" element={<ShoppingPage titulo='Bolsones' filtros={['Agroecologico']} products={data.Bolsones} />}></Route>
            <Route path="frutas" element={<ShoppingPage titulo='Frutas' filtros={['Agroecologico']} products={data.Frutas} />}></Route>
            <Route path="verduras" element={<ShoppingPage titulo='Verduras' filtros={['Agroecologico']} products={data.Verduras} />}></Route>
            <Route path="dietetica" element={<ShoppingPage titulo='Dietetica' filtros={[]} products={data.Dietetica} />}></Route>
            <Route path="congelados" element={<ShoppingPage titulo='Congelados' filtros={[]} products={data.Congelados} />}></Route>
            <Route path="almacen" element={<ShoppingPage titulo='Almacen' filtros={[]} products={data.Almacen} />}></Route>
            <Route path="bebidas" element={<ShoppingPage titulo='Bebibdas' filtros={[]} products={data.Bebidas} />}></Route>
            <Route path="ofertas" element={<ShoppingPage titulo='Ofertas'  filtros={['Agroecologico']} products={data.Ofertas} />}></Route>
            <Route path="carrito" element={<Cart items={[data.Verduras[0], data.Verduras[3], data.Frutas[2], data.Frutas[5], data.Bolsones[0], data.Dietetica[3],data.Dietetica[3]]} />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="compra-finalizada" element={<OrderPlaced />}></Route>
            <Route path="nosotros" element={<UnderConstruction />}></Route>
            <Route path="contacto" element={<UnderConstruction />}></Route>
            <Route path="como-comprar" element={<UnderConstruction />}></Route>
            <Route path="envios" element={<UnderConstruction />}></Route>
            <Route path="faq" element={<UnderConstruction />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;