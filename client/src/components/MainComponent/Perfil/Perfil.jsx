import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { ProgressBar } from 'react-loader-spinner';
import { API_URL } from '../../../../config/config'; 

const Perfil = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`${API_URL}/api/usuarios`);
        if (!response.ok) {
          throw new Error('Error fetching user data');
        }
        const data = await response.json();
        setUsuario(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUsuario();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Encriptar la contraseña antes de enviarla
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(usuario.password, salt);

    const usuarioConPasswordEncriptada = {
      ...usuario,
      password: hashedPassword,
    };

    try {
      const response = await fetch(`${API_URL}/api/usuarios/${usuario.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioConPasswordEncriptada),
      });

      if (!response.ok) {
        throw new Error('Error actualizando el perfil');
      }

      const data = await response.json();
      setUsuario(data);
      alert('Perfil actualizado correctamente');
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className='loader'>
        <ProgressBar
          visible={true}
          height="400"
          width="400"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          barColor="#FF82A9"
          borderColor="#FFC0BE"
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className='perfil'>
      <h1>Perfil del Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={usuario.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={usuario.password || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={usuario.telefono || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={usuario.direccion || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Puntos de Descuento</label>
          <input
            type="text"
            name="puntos_descuento"
            placeholder='Para consultar tus puntos, contacta con nosotros'
            disabled
          />
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </section>
  );
};

export default Perfil;
