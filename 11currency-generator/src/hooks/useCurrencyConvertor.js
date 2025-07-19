import { useState } from "react";

function useCurrencyConvertor(currency) {
  const [data, setData] = useState({});

  fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => setData(res.rates));

  console.log(data);
  return data;
}

export default useCurrencyConvertor;
