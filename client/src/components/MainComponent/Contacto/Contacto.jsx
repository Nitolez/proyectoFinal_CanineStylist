import React from "react";
import Mapa from "./Mapa";

const Contacto = () => {
  return (
    <>
      <section className="contacto">
        <article className="horario">
          <img src="/horario.jpg" alt="Horario de atención" />
        </article>
        <article className="datos">
          <h2>Datos de contacto</h2>
          <div className="cardDato">
            <img src="/direccion.png" alt="Icono ubicacion" />
            <h2>Dirección</h2>
            <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd424d14efefab7b:0x6fdecfe6f6931575?sa=X&ved=1t:8290&ictx=111" target="blank">
              <p>El paseo del sol Bloque 8 Local 39, Meco, Madrid</p>
            </a>
          </div>
          <div className="cardDato">
            <img src="/email.png" alt="Icono email" />
            <h2>Email</h2>
            <p>almudenafergar@hotmail.com</p>
          </div>
          <div className="cardDato">
            <img src="/telefono.png" alt="Icono telefono" />
            <h2>Telefono</h2>
            <p>+34 653 07 27 99</p>
          </div>
        </article>
        <Mapa />
      </section>
    </>
  );
};

export default Contacto;
