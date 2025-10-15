import React, { useState, useEffect } from "react";

// import "./App.css";

const API_URL = "https://fakestoreapi.com/products/";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  async function handleFetchData() {
    await fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log("FAILED IN FETCH!: ", err));
  }

  return (
    <>
      <main className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-8">
            Product Showcase
          </h1>

          <div className="flex flex-wrap gap-6 justify-center">
            {data.map((product) => (
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
