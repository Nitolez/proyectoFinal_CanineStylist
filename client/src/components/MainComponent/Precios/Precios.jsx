import React, { useState } from "react";
import RazaList from "./RazaList";
import RazaForm from "./RazaForm";

const Precios = () => {
  const [razaName, setRazaName] = useState("");

  return (
  <>
  <section className="precios">
    <h2>Consulta nuestros precios por raza de perro</h2>
  <RazaForm setRaza={setRazaName}/>
  <RazaList razaName={razaName}/>
  </section>
  </>
  )
}

export default Precios;
