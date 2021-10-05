import { useState } from "react";
import "./styles.css";

export default function App() {
  const [ item, setItem ] = useState(1);

  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
