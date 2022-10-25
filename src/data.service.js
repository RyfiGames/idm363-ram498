import allData from "./testdata.json";

const products = allData.products;
const featuredProducts = allData.featured.map((id) => products[id]);

export function getFeaturedGames() {
  return featuredProducts;
}

export function getAllGames() {
  return products;
}
