import allData from "./testdata.json";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firestore";
import { useEffect, useState } from "react";

export const data = { products: [], featuredProducts: [] };

function DataService() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeatured] = useState([]);

  useEffect(() => {
    data.products = products;
    data.featuredProducts = featuredProducts;

    const q = query(collection(db, "allgames"));

    onSnapshot(q, (snapshot) => {
      let prodArray = [];
      let featuredIds = [];
      snapshot.forEach((doc) => {
        if (doc.id === "featured") {
          featuredIds = doc.data().featuredProducts;
          return;
        }
        console.log(doc.id, doc.data());
        prodArray.push({ id: doc.id, ...doc.data() });
      });

      let featProd = prodArray.filter((prod) => featuredIds.includes(prod.id));

      setProducts(prodArray);
      setFeatured(featProd);
    });
  }, []);

  return <></>;
}

export default DataService;

// const products = allData.products;
// const featuredProducts = allData.featured.map((id) => products[id]);

// export function getFeaturedGames() {
//   return featuredProducts;
// }

// export function getAllGames() {
//   return products;
// }
