import { useState } from "react";

function useCurrencyConvertor(currency) {
  const [data, setData] = useState({});

  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  )
    .then((res) => res.json())
    .then((res) => setData(res));

  console.log(data);
  return data;
}

export default useCurrencyConvertor;
