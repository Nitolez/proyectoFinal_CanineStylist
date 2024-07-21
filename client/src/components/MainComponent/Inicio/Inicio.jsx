import React from "react";
import Carrusel from "./Carrusel";
import Valores from "./Valores";
import Valoraciones from "./Valoraciones";
import {Fade} from 'react-reveal';

const Inicio = () => {
  return (
    <section className="inicio">
      <Fade right>
      <Carrusel />
      </Fade>
      <Fade left>
      <Valores />
      </Fade>
      <Fade right>
      <Valoraciones />
      </Fade>
    </section>
  );
};


export default Inicio;
