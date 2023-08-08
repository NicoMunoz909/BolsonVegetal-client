import { useContext } from "react";
import { FaMinus, FaPlus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { CartContext, CartDispacthContext } from "../../Contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const items = useContext(CartContext);
  const dispatch = useContext(CartDispacthContext);

  return (
    <div>
      <div className="cart-header">
        <FaShoppingCart />
        <h2>Carrito</h2>
        <FaShoppingCart style={{ transform: "rotateY(180deg)" }} />
      </div>
      {items.length === 0 && <h2>Tu carrito esta vacio</h2>}
      {items.map((i) => {
        return (
          <div className="cart-item">
            <div
              className="cart-item__description"
              style={{ fontSize: i.name.length > 10 ? "15px" : "20px" }}
            >
              <p>
                {i.name} x {i.priceType}
              </p>
              <p>Cantidad: {i.quant}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "16px",
                }}
              >
                <div>
                  <button onClick={() => dispatch({ type: "ADD", item: i })} className="cart-item__plus">
                    <FaPlus />
                  </button>
                  <button onClick={() => dispatch({ type: "REMOVE", item: i })} className="cart-item__minus">
                    <FaMinus />
                  </button>
                </div>
                <button style={{ border: "none" }} onClick={() => dispatch({ type: "DELETE", name: i.name })}>
                  <FaTrashAlt />
                </button>
              </div>
            </div>
            <p>${i.price}</p>
            <div>
              <img src={`https://placehold.co/200x200?text=${i.name}`} alt="" />
            </div>
          </div>
        );
      })}
      <div className="cart-footer">
        <p>
          Total: ${items.reduce((total, current) => total + parseFloat(current.price * current.quant), 0)}
        </p>
        {items.length > 0 && (
          <a href="/checkout" style={{ height: "fit-content" }}>
            <button style={{ textDecoration: "underline" }} className="cart-footer__checkout">
              Ir a pagar
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Cart;
