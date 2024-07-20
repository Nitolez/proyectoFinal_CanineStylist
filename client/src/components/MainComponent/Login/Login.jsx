// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //parte de RRD para redirigir sin necesidad de links

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', 
        { email, password },
        { withCredentials: true }
        //esto envía credenciales de usuario con solicitudes desde un dominio diferente al dominio donde se aloja el servidor
      );
      if (response.data.success) {
        const userType = response.data.userType;
        if (userType === 'admin') {
          navigate('/admin');
        } else if (userType === 'client') {
          navigate('/client');
        }
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <a href="/registro">Registrarse</a>
  </section>
  )
};

export default Login;
