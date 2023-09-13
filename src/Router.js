import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Backoffice from "./Components/Backoffice";
import Products from "./Components/Backoffice/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import OrderPlaced from "./Components/OrderPlaced";
import ShoppingPage from "./Components/ShoppingPage";
import UnderConstruction from "./Components/UnderConstruction";
import LoadingPage from "./Components/LoadingPage";
import { useEffect, useState } from "react";
import { config } from "./Constants";

const Router = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = config.url;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.filter((item) => item.inStock));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [URL]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="backoffice" element={<Backoffice />}>
            <Route path="productos" element={<Products />}></Route>
          </Route>
          {isLoading && <Route path="/" element={<LoadingPage />} />}
          {!isLoading && (
            <Route path="/" element={<App />}>
              <Route
                index
                element={
                  <Home
                    mostSold={items.slice(23, 28)}
                    offers={items.filter((i) => i.tags.includes("Oferta"))}
                  />
                }
              ></Route>
              <Route
                path="bolsones"
                element={
                  <ShoppingPage
                    titulo="Bolsones"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Bolsones")}
                  />
                }
              ></Route>
              <Route
                path="frutas"
                element={
                  <ShoppingPage
                    titulo="Frutas"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Frutas")}
                  />
                }
              ></Route>
              <Route
                path="verduras"
                element={
                  <ShoppingPage
                    titulo="Verduras"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Verduras")}
                  />
                }
              ></Route>
              <Route
                path="dietetica"
                element={
                  <ShoppingPage
                    titulo="Dietetica"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Dietetica")}
                  />
                }
              ></Route>
              <Route
                path="congelados"
                element={
                  <ShoppingPage
                    titulo="Congelados"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Congelados")}
                  />
                }
              ></Route>
              <Route
                path="almacen"
                element={
                  <ShoppingPage
                    titulo="Almacen"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Almacen")}
                  />
                }
              ></Route>
              <Route
                path="bebidas"
                element={
                  <ShoppingPage
                    titulo="Bebibdas"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Bebidas")}
                  />
                }
              ></Route>
              <Route
                path="ofertas"
                element={
                  <ShoppingPage
                    titulo="Ofertas"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.tags.includes("Oferta"))}
                  />
                }
              ></Route>
              <Route path="carrito" element={<Cart />}></Route>
              <Route path="checkout" element={<Checkout />}></Route>
              <Route path="compra-finalizada" element={<OrderPlaced />}></Route>
              <Route path="nosotros" element={<UnderConstruction />}></Route>
              <Route path="contacto" element={<UnderConstruction />}></Route>
              <Route path="como-comprar" element={<UnderConstruction />}></Route>
              <Route path="envios" element={<UnderConstruction />}></Route>
              <Route path="faq" element={<UnderConstruction />}></Route>
              <Route path="*" element={<h1>404</h1>}></Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
