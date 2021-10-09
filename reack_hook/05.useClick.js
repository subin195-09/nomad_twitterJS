import { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return ;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const onClick = () => console.log("skim");
  const title = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}
