import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Inicio";
import Personal from "./Personal";
import Servicios from "./Servicios";
import Precios from "./Precios";
import Contacto from "./Contacto";
import Login from "./Login";
import Registro from "./Registro";
import Perfil from "./Perfil";
import Crear from "./Crear";

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
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/*" element={"/"} />
      </Routes>

    </main>
  );
};

export default MainComponent;