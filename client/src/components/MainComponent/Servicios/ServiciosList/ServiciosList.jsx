import axios from "axios";
import { useEffect, useState } from "react";
import ServiciosCard from "./ServiciosCard";
import { v4 as uuidv4 } from "uuid";

const ServiciosList = () => {
  const [servicios, setServicios] = useState([]);

  const getServicios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/servicios");
      return response.data;
    } catch (error) {
      console.error("Error obteniendo servicios", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchServicios = async () => {
      const serviciosData = await getServicios();
      setServicios(serviciosData);
    };
    fetchServicios();
  }, []);

  return (
    <>
      <article className="serviciosList">
        {servicios.map((servicio) => (
          <ServiciosCard servicio={servicio} key={uuidv4()} />
        ))}
      </article>
    </>
  );
};

export default ServiciosList;
