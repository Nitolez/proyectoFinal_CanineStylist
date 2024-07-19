import React from "react";

const ServiciosCard = ({ servicio }) => {

  return (
  <div className="serviciosCard">
    <img src="/iconoServicios.png" alt="Icono servicios" />
    <h3>{servicio.nombre}</h3>
    <p>{servicio.descripcion}</p>
  </div>
  )
};

export default ServiciosCard;
