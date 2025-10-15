import React, { useState, useEffect } from "react";

// import "./App.css";

const API_URL = "https://fakestoreapi.com/products/";
const PAGE_SIZE = 3;

function App() {
  const [data, setData] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(0);
  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(0);

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("FAILED IN FETCH!: ", err);
    }
  }

  const start = currentPageNo * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  function handlePageClick(number) {
    setCurrentPageNo(number);
  }

  function setPagination() {
    start = currentPageNo * PAGE_SIZE;
    end = start + PAGE_SIZE;
  }

  return (
    <>
      <main className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-8">
            Product Showcase
          </h1>
          <div className="text-gray-400 text-sm mt-1 flex flex-wrap gap-6 justify-center mb-8">
            <div onClick={() => handlePageClick(0)}>0</div>
            <div onClick={() => handlePageClick(1)}>1</div>
            <div onClick={() => handlePageClick(2)}>2</div>
            <div onClick={() => handlePageClick(3)}>3</div>
            <div onClick={() => handlePageClick(4)}>4</div>
            <div onClick={() => handlePageClick(5)}>5</div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {data.slice(start, end).map((product) => (
              <div
                key={product.id}
                className="w-full flex-grow sm:flex-grow-0 sm:w-64 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p
                    className="font-semibold text-lg text-white truncate"
                    title={product.title}
                  >
                    {product.title}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
