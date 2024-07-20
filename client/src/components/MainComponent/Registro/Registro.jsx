import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        nombre, email, password, telefono, direccion
      });
      if (response.status === 201) {
        navigate('/login'); // Redirigir al login después de registrarse
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <section className="registro">
      <h2>¡Registrate para acumular puntos y accede a descuentos!</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre completo" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" required/>
      <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" required/>
      <button type="submit">Registrar</button>
      <a href="/login">O inicia sesión...</a>
    </form>
    </section>
  );
};

export default Registro;
