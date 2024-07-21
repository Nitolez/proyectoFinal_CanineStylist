import React from "react";

const Slider = ({
  images,
  width = "300px",
  height = "300px",
  quantity = 9,
  reverse = true,
}) => {
  return (
    <div
      className={`slider ${reverse ? "reverse" : ""}`}
      style={{ "--width": width, "--height": height, "--quantity": quantity }}
    >
      <div className="list">
        {images.map((image, index) => (
          <div
            className="item"
            key={index}
            style={{ "--position": index + 1 }}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
