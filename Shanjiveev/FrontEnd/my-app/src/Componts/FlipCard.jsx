import React, { useState } from "react";
 
import "./FlipCard.css"; // Custom CSS for flipping effect

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="flip-card-inner">
          <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
            <h3>Pie Chart</h3>
            <button className="btn btn-primary mt-3" onClick={handleFlip}>
              View Bar Chart
            </button>
            
          </div>
          <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
            <h3>Bar Chart</h3>
            <button className="btn btn-secondary mt-3" onClick={handleFlip}>
              View Pie Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
