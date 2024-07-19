import React from "react";

const Mapa = () => {
  return (
    <>
      <article className="mapa">
        <h2>Ubicación</h2>
        <iframe
          src="https://maps.google.com/maps?q=paseo%20del%20sol%208%20meco%2028880%2C%20peluqueria%20canine&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
          title="paseo del sol 8 meco 28880, peluqueria canine"
        ></iframe>
      </article>
    </>
  );
};

export default Mapa;
