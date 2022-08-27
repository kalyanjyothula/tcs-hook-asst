// import logo from "./logo.svg";
// import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState("");
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      await fetch(url)
        .then((res) => res.json())
        .then((res) => setApiData(res))
        .catch((err) => console.log(err, "e"));
    } catch (error) {
      console.log(error);
    }
    // increament
  };

  const handleIncremet = () => {
    setCount((prev) => prev + 1);
    console.log(count, "inc");
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
    console.log(count, "dec");
  };
  // componentDidMount
  useEffect(() => {
    fetchData();
    console.log(apiData, "H");
  }, []);

  return (
    <div>
      <h2>Hooks Concept</h2>
      <h1>{count}</h1>
      {/* <p>{JSON.stringify(apiData)}</p> */}
      <button type="button" onClick={() => handleIncremet()}>
        INC
      </button>
      <button type="button" onClick={() => handleDecrement()}>
        DEC
      </button>
    </div>
  );
}

export default App;
