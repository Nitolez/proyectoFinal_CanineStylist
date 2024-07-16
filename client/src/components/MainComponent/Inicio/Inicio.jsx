import React from "react";
import Carrusel from "./Carrusel";
import Valores from "./Valores";
import Valoraciones from "./Valoraciones";

const Inicio = () => {
  return (
    <section className="inicio">
      <Carrusel />
      <Valores />
      <Valoraciones />
    </section>
  );
};


export default Inicio;
