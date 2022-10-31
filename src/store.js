import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firestore";

export const state = {
  cartItems: [],
  addCartItem: (item) => {},
  products: [],
  featuredProducts: [],
  updateProducts: (prod, featProd) => {},
};

let localState = {
  cartItems: [],
  addCartItem: (item) => {},
  products: [],
  featuredProducts: [],
  updateProducts: (prod, featProd) => {},
};

const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    localState = initialState;
    const q = query(collection(db, "allgames"));

    onSnapshot(q, (snapshot) => {
      let prodArray = [];
      let featuredIds = [];
      snapshot.forEach((doc) => {
        if (doc.id === "featured") {
          featuredIds = doc.data().featuredProducts;
          return;
        }
        prodArray.push({ id: doc.id, ...doc.data() });
      });
      let featProd = prodArray.filter((prod) => featuredIds.includes(prod.id));
      updateProducts(prodArray, featProd);
    });
  }, []);

  const addItem = (item) => {
    localState.cartItems.push(item);
    setState({ ...localState });
  };

  const updateProducts = (prod, featProd) => {
    localState.products = prod;
    localState.featuredProducts = featProd;
    setState({ ...localState });
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
