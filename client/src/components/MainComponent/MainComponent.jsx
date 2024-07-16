import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Inicio";
import Personal from "./Personal";
import Servicios from "./Servicios";
import Precios from "./Precios";
import Contacto from "./Contacto";
import Login from "./Login";


const MainComponent = () => {

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>

    </main>
  );
};

export default MainComponent;