import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firestore";

export const state = {
  cartItems: [],
  addCartItem: (item) => {},
  removeCartItem: (item) => {},
  products: [],
  featuredProducts: [],
  updateProducts: (prod, featProd) => {},
  sendChanges: (product) => {},
  emptyCart: () => {},
};

let localState = {
  cartItems: [],
  addCartItem: (item) => {},
  removeCartItem: (item) => {},
  products: [],
  featuredProducts: [],
  updateProducts: (prod, featProd) => {},
  sendChanges: (product) => {},
  emptyCart: () => {},
};

const StateContext = createContext(state);

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    localState = initialState;
    getRemoteData();
  }, []);

  function getRemoteData() {
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
  }

  const addItem = (item) => {
    localState.cartItems.push(item);
    setState({ ...localState });
  };

  const removeItem = (item) => {
    const i = localState.cartItems.indexOf(item);
    localState.cartItems.splice(i, 1);
    setState({ ...localState });
  };

  const emptyCart = () => {
    localState.cartItems = [];
    setState({ ...localState });
  };

  const updateProducts = (prod, featProd) => {
    localState.products = prod;
    localState.featuredProducts = featProd;
    setState({ ...localState });
  };

  const sendChanges = (product) => {
    let changedProduct = { ...product };
    delete changedProduct.id;
    setDoc(doc(db, "allgames", product.id), changedProduct)
      .then(() => {
        // getRemoteData();
      })
      .catch((reason) => console.log("error! " + reason));
  };

  const initialState = {
    cartItems: [],
    addCartItem: addItem,
    removeCartItem: removeItem,
    products: [],
    featuredProducts: [],
    updateProducts: updateProducts,
    sendChanges: sendChanges,
    emptyCart: emptyCart,
  };

  const [stateH, setState] = useState(initialState);

  return (
    <StateContext.Provider value={stateH}>{children}</StateContext.Provider>
  );
};

export default StateContext;
