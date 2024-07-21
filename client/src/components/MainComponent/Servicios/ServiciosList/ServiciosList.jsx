import axios from "axios";
import { useEffect, useState } from "react";
import ServiciosCard from "./ServiciosCard";
import { v4 as uuidv4 } from "uuid";
import { ProgressBar } from 'react-loader-spinner';
import { API_URL } from '../../../../../config/config'

const ServiciosList = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServicios = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/servicios`);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error obteniendo servicios", error);
      setLoading(false);
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

  if (loading) {
    return (
      <div className='loader'>
        <ProgressBar
          visible={true}
          height="300"
          width="300"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          barColor="#FF82A9"
          borderColor="#FFC0BE"
        />
      </div>
    );
  }

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
