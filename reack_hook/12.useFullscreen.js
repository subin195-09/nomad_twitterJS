import { useRef } from "react";
import "./styles.css";

const useFullscreen = (onFulls) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.webkitRequestFullscreen();
      if (onFulls && typeof onFulls === "function") {
        onFulls(true);
      }
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    if (onFulls && typeof onFulls === "function") {
      onFulls(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are not Full");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
