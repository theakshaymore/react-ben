import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise1 done....");
      }, 1000);
    });
  }
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise2 done....");
      }, 1000);
    });
  }
  function promise3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise3 done....");
      }, 2000);
    });
  }
  function promise4() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise4 done....");
      }, 1000);
    });
  }

  useEffect(() => {
    const loadData = async () => {
      setProgress(0);
      const result1 = await promise1();
      setProgress(30);
      console.log(result1);

      const result2 = await promise2();
      setProgress(50);
      console.log(result2);

      const result3 = await promise3();
      setProgress(70);
      console.log(result3);

      const result4 = await promise4();
      setProgress(100);
      console.log(result4);
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
      {progress === 100 && <p>DONE....! 👍</p>}
    </>
  );
}

export default App;
