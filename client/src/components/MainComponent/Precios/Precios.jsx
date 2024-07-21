import React, { useState } from "react";
import RazaList from "./RazaList";
import RazaForm from "./RazaForm";
import {Bounce} from 'react-reveal';

const Precios = () => {
  const [razaName, setRazaName] = useState("");

  return (
  <>
  <Bounce>
  <section className="precios">
    <h2>Consulta nuestros precios por raza de perro</h2>
  <RazaForm setRaza={setRazaName}/>
  <RazaList razaName={razaName}/>
  </section>
  </Bounce>
  </>
  )
}

export default Precios;
