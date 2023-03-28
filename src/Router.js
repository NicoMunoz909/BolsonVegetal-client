import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import ShoppingPage from "./Components/ShoppingPage";
import * as data from './data.js'

const Router = () => {

  console.log(data.Congelados)

  return (
    <>
      <BrowserRouter>
        <Routes>
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
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;