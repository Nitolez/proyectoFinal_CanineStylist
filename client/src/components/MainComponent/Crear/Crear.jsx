import React, { useState } from 'react';

const Crear = () => {
  const [servicio, setServicio] = useState({
    nombre: '',
    descripcion: ''
  });

  const [raza, setRaza] = useState({
    nombre: '',
    descripcion: '',
    precio: ''
  });

  const handleChangeServicio = (e) => {
    const { name, value } = e.target;
    setServicio({
      ...servicio,
      [name]: value,
    });
  };

  const handleChangeRaza = (e) => {
    const { name, value } = e.target;
    setRaza({
      ...raza,
      [name]: value,
    });
  };

  const handleSubmitServicio = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/servicios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(servicio),
      });

      if (!response.ok) {
        throw new Error('Error creando servicio');
      }

      const data = await response.json();
      alert('Servicio creado con exito');
      setServicio({ nombre: '', descripcion: '' });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmitRaza = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/razas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(raza),
      });

      if (!response.ok) {
        throw new Error('Error creando Raza');
      }

      const data = await response.json();
      alert('Raza creada con exito');
      setRaza({ nombre: '', descripcion: '', precio: '' });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="crear">
      <div className="crearServicios">
        <h2>Crear servicios</h2>
        <form onSubmit={handleSubmitServicio}>
          <div>
            <label>Nombre del Servicio</label>
            <input
              type="text"
              name="nombre"
              value={servicio.nombre}
              onChange={handleChangeServicio}
              required
            />
          </div>
          <div>
            <label>Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={servicio.descripcion}
              onChange={handleChangeServicio}
              required
            />
          </div>
          <button type="submit">Crear Servicio</button>
        </form>
      </div>
      <div className="crearRazas">
        <h2>Crear razas</h2>
        <form onSubmit={handleSubmitRaza}>
          <div>
            <label>Nombre de la Raza</label>
            <input
              type="text"
              name="nombre"
              value={raza.nombre}
              onChange={handleChangeRaza}
              required
            />
          </div>
          <div>
            <label>Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={raza.descripcion}
              onChange={handleChangeRaza}
              required
            />
          </div>
          <div>
            <label>Precio</label>
            <input
              type="text"
              name="precio"
              value={raza.precio}
              onChange={handleChangeRaza}
              required
            />
          </div>
          <button type="submit">Crear Raza</button>
        </form>
      </div>
    </section>
  );
};

export default Crear;
