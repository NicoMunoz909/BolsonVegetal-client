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
      const cartIndex = cart.findIndex(product => product.name === action.item.name)
      if(cartIndex >= 0) {
        cart[cartIndex].quant += 1;
        sessionStorage.setItem('cart', JSON.stringify(cart))
        return [...cart]
      }
      sessionStorage.setItem('cart', JSON.stringify([...cart, {...action.item, quant: 1}]))
      return [...cart, {...action.item, quant: 1}]
    }
    case 'REMOVE': {
      const cartIndex = cart.findIndex(product => product.name === action.item.name)
      if (cart[cartIndex].quant > 1) cart[cartIndex].quant -= 1;
        sessionStorage.setItem('cart', JSON.stringify(cart))
        return [...cart]
    }
    case 'DELETE': {
      sessionStorage.setItem('cart', JSON.stringify(cart.filter(product => product.name !== action.name)))
      return cart.filter(product => product.name !== action.name)
    }
    case 'CLEAR': {
      sessionStorage.setItem('cart', []);
      return []
    }
    default:
      break;
  }
}