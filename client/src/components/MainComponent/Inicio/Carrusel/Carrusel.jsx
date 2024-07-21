import React from "react";
import Slider from "./Slider";
import {Fade, Zoom, Roll} from 'react-reveal';
const Carrusel = () => {
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
      <Fade right>
      <div className="titulo4">
        <h2>Te damos la bienvenida a</h2>
        <img src="/tituloLogo.png" alt="logoEmpresa"></img>
        <p>¡El mejor lugar para tu mascota!</p>
      </div>
      </Fade>
      <Slider images={images} />
    </article>
  );
};

export default Carrusel;
