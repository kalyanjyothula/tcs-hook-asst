import React, { useCallback, useState } from "react";
import App from "../src/App";

export default function CallbackExample() {
  const [count, setCount] = useState(0);
  const someValue = "Unchaned Value";

  const handleCount = () => setCount(count + 1);
  const doSomething = useCallback(() => "Hello" + someValue, [someValue]);
  // const doSomething = () => "Hello" + someValue;
  return (
    <div>
      <h1>Hello</h1>
      <p>{count}</p>
      <button type="button" onClick={() => handleCount()}>
        INC
      </button>
      <App doSomething={doSomething} />
    </div>
  );
}
