import { useEffect, useState } from "react";

function useCurrencyConvertor(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates));

    console.log(data);
  }, currency);

  console.log(data);
  return data;
}

export default useCurrencyConvertor;
