import React from "react";
import ServiciosList from "./ServiciosList";
import Colaboradores from "./Colaboradores";

const Servicios = () => {
  return (
  <>
  <section className="servicios">
    <h2>Nuestros servicios</h2>
    <ServiciosList />
    <Colaboradores />
  </section>
  </>
  );
};

export default Servicios;
