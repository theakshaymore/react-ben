import { useEffect, useState } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.js";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Pagination</h1>
      {products.slice(5).map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
export default Pagination;
