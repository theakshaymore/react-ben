import { useEffect, useState } from "react";
import ProductCard from "../components/PageCard";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 6;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(0);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let productsLength = products.length;
  let noOfPages = Math.ceil(productsLength / PAGE_SIZE);
  let start = currentPageNo * PAGE_SIZE;
  let end = start + PAGE_SIZE;

  return (
    <div>
      {products.length === 0 ? (
        "No Products available"
      ) : (
        <div className="main-container">
          <h1>Pagination</h1>
          <div className="products-grid">
            {products.slice(start, end).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Pagination;
