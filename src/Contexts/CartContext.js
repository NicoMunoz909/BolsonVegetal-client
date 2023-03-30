import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

export const CartDispacthContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer( cartReducer, (sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []));
  
  return (
    <CartContext.Provider value={cart}>
      <CartDispacthContext.Provider value={dispatch}>
        {children}
      </CartDispacthContext.Provider>
    </CartContext.Provider>
  )
}

function cartReducer (cart, action) {
  switch (action.type) {
    case 'ADD': {
      sessionStorage.setItem('cart', JSON.stringify([...cart, action.item]))
      return [...cart, action.item]
    }
    case 'DELETE': {
      sessionStorage.setItem('cart', JSON.stringify(cart.filter(product => product.name !== action.name)))
      return cart.filter(product => product.name !== action.name)
    }
    default:
      break;
  }
}