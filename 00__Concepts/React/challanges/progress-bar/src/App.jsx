import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise1 done....");
      }, 3000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise2 done....");
      }, 5000);
    });
  }

  function promise3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise3 done....");
      }, 3000);
    });
  }

  useEffect(() => {
    const loadData = async () => {
      setProgress(0);
      const result1 = await promise1();
      setProgress(30);
      console.log(result1);

      const result2 = await promise2();
      setProgress(70);
      console.log(result2);

      const result3 = await promise3();
      setProgress(100);
      console.log(result3);
    };
    loadData();
  }, []);

  return (
    <>
      <h1>Ben progress bar</h1>
      <div className="progressbar">
        <div className="progressbar__line" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </>
  );
}

export default App;
