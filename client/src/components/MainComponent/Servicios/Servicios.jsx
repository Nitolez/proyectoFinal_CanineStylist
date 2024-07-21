import React from "react";
import ServiciosList from "./ServiciosList";
import Colaboradores from "./Colaboradores";
import {Fade} from 'react-reveal';
const Servicios = () => {
  return (
  <>
  <Fade bottom>
  <section className="servicios">
    <h2>Nuestros servicios</h2>
    <ServiciosList />
    <Colaboradores />
  </section>
  </Fade>
  </>
  );
};

export default Servicios;
