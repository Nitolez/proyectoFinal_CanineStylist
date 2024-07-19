import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registro = ({ setUser }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos al servidor para registrar al usuario
    // Pero en este caso, simplemente configuraremos setUser con el nombre del usuario
    setUser(nombre);
    // Limpiar los campos después de registrar
    setNombre("");
    setEmail("");
    setPassword("");
    setTelefono("");
    setDireccion("");
  };

  return (
    <section className="registro">
      <h2>REGISTRO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre..."
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña..."
          required
        />
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono..."
        />
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Dirección..."
        />
        <button type="submit">Registrarse</button>
        <Link to="/login">Volver al Login</Link>
      </form>
    </section>
  );
};

export default Registro;
