import { useEffect, useState } from "react";
import ProductCard from "../components/PageCard";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(products);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        "No Products available"
      ) : (
        <div className="main-container">
          <h1>Pagination</h1>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Pagination;
