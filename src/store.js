import { createContext, useState } from "react";

export const state = {
  cartItems: [],
  itemCount: 0,
  addItem: (item) => {},
};

const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  const addItem = (item) => {
    const newState = Object.assign({}, stateH);
    newState.cartItems.push(item);
    setState(newState);
  };

  const initialState = {
    cartItems: [],
    addItem: addItem,
  };

  const [stateH, setState] = useState(initialState);

  return (
    <StateContext.Provider value={stateH}>{children}</StateContext.Provider>
  );
};

export default StateContext;
