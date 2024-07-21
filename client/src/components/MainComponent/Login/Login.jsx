// Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserType } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', 
        { email, password },
        { withCredentials: true }
        //indicar que se deben enviar cookies
      );
      if (response.data.success) {
        const userType = response.data.userType;
        setUserType(userType);
        navigate('/');
      } else {
        alert('Email o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Ha habido un error con tu solicitud', error);
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
  );
};

export default Login;
