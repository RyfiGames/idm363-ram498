import { createContext, useState } from "react";

export const state = {
  cartItems: [],
  addCartItem: (item) => {},
  products: [],
  featuredProducts: [],
  updateProducts: (prod, featProd) => {},
};

const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  const addItem = (item) => {
    const newState = Object.assign({}, stateH);
    newState.cartItems.push(item);
    setState(newState);
  };

  const updateProducts = (prod, featProd) => {
    const newState = Object.assign({}, stateH);
    newState.products = prod;
    newState.featuredProducts = featProd;
    setState(newState);
  };

  const initialState = {
    cartItems: [],
    addCartItem: addItem,
    products: [],
    featuredProducts: [],
    updateProducts: updateProducts,
  };

  const [stateH, setState] = useState(initialState);

  return (
    <StateContext.Provider value={stateH}>{children}</StateContext.Provider>
  );
};

export default StateContext;
