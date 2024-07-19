import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = ({setUser}) => {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
    setValue(e.target.value = "") 
  };

  return <section className="login">
    <h2>LOGIN</h2>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          name="topic" 
          placeholder="Usuario..." 
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña..."
        />
        <button type="submit">Login</button>
        <Link to="/registro">REGISTRATE</Link>
      </form>
  </section>;
};

export default Login;
