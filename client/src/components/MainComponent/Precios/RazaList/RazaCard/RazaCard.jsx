import React from "react";

const RazaCard = ({ raza }) => {
  if (!raza) {
    return null;
  }

  return (
    <article className="razaCard">
      <h2>{raza.nombre}</h2>
      <p>{raza.descripcion}</p>
      <p>Precio: {raza.precio}</p>
    </article>
  );
};

export default RazaCard;
