import { useRef, useEffect } from "react";
import paper from "paper";

function CanvasTitle() {
  const canvasRef = useRef();
  const stroke = useRef();
  const fadingPencil = new paper.Tool();

  fadingPencil.onMouseDown = (event) => {
    stroke.current = new paper.Path({
      strokeColor: "#6e98ff",
      strokeWidth: 2,
    });
    stroke.current.add(event.point);
  };

  fadingPencil.onMouseDrag = (event) => {
    stroke.current.add(event.point);
  };

  fadingPencil.onMouseUp = (event) => {
    let temp = stroke.current;
    let fadeEffect = setInterval(() => {
        if (temp.opacity < 0.1) {
          temp.remove();
          clearInterval(fadeEffect);
        } else {
          temp.opacity -= 0.1;
        }
      }, 100);
  };

  useEffect(() => {
    paper.setup(canvasRef.current);
    paper.activate(fadingPencil);
  }, []);

  return (
    <div className="title">
      <canvas id="sketch-canvas" ref={canvasRef} />
      <h3>March 27, 2023</h3>
      <h1>SKETCH Workshop</h1>
    </div>
  );
}

export default CanvasTitle;
