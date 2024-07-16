import React from "react";

const Carrusel = () => {
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

  const images = [
    "/dragon_1.jpg",
    "/dragon_2.jpg",
    "/dragon_3.jpg",
    "/dragon_4.jpg",
    "/dragon_5.jpg",
    "/dragon_6.jpg",
    "/dragon_7.jpg",
    "/dragon_8.jpg",
    "/dragon_9.jpg",
  ];

  return (
    <article className="carrusel">
     <Slider images={images} />
     <div className="titulo4">
      <h1>Canine Stylist</h1>
      </div>
      <div className="titulo">
        <div className="titulo1">
        <p>Bienvenidos a </p>
          <h2>Canine Stylist </h2>
        </div>
        <div className="titulo2">
        <img src="/model.png" alt="Logo" />
        </div>
        <div className="titulo3">
        <p>¡El mejor lugar para tu mascota!</p>
        </div>
      </div>
    </article>
  );
};

export default Carrusel;
