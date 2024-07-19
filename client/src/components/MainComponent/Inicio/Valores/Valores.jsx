import React from "react";

const Valores = () => {
  return (
    <article className="valores">
      <div className="valoresContainer">
        <img src="/valores1.jpg" alt="Foto de perro 1" />
      </div>
      <div className="valoresText">
        <h2>
          El amor y el cuidado es nuestra máxima prioridad.
        </h2>
        <p>
          Somos un equipo de profesionales apasionados por los animales,
          liderado por Almudena, una experta en el arte del grooming con
          certificación en Grooming Art. Nuestro objetivo es proporcionar a su
          mascota una experiencia de cuidado integral que sea tanto relajante
          como rejuvenecedora.
        </p>
        <img src="/valores2.jpg" alt="Foto de perro 2" className="fotoValores"/>
      </div>
    </article>
  );
};

export default Valores;
