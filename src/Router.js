import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from "./Components/Home";
import ShoppingPage from "./Components/ShoppingPage";

const Router = () => {

  const products = [{name: 'Naranja de jugo', price: '250', priceType: 'KG'}, {name: 'Banana boliviana', price: '320', priceType: 'KG'}, {name: 'Palta Hass', price: '300', priceType: 'U'}, {name: 'Champignon', price: '250', priceType: '100G'}]

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="frutas" element={<ShoppingPage titulo='Frutas' filtros={['Agroecologico', 'Citricos']} products={products} />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;