import { useEffect } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave");
  }, []);
};

export default function App() {
  const begForlife = () => console.log("Pls don't leave");
  useBeforeLeave(begForlife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
