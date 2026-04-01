import React, { useState } from "react";
import "./Map.css";
import map from '../Assets/Img/map.svg'
function Map() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="map-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="map"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseDown={handleMouseDown}
      >
        <img
          src={map}
          alt="map"
          className="map-image"
        />

        {/* locations */}
        <div className="pin" style={{ top: "120px", left: "200px" }}></div>
        <div className="pin" style={{ top: "300px", left: "400px" }}></div>
        <div className="pin" style={{ top: "200px", left: "600px" }}></div>
      </div>
    </div>
  );
}

export default Map;