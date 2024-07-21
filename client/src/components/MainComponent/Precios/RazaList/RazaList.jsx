import axios from "axios";
import { useEffect, useState } from "react";
import RazaCard from "./RazaCard";
import { v4 as uuidv4 } from "uuid";
import { ProgressBar } from 'react-loader-spinner';
import { API_URL } from '../../../../config/config'; 

const RazaList = ({ razaName }) => {
  const [razaDetails, setRazaDetails] = useState([]);
  const [filteredRazaDetails, setFilteredRazaDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRazaDetails = async (name) => {
    try {
      const response = await axios.get(`${API_URL}/api/razas`);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error obteniendo servicios", error);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    const fetchRazas = async () => {
      const details = await getRazaDetails();
      setRazaDetails(details);
      setFilteredRazaDetails(details); // Mostrar todas las razas inicialmente
    };
    fetchRazas();
  }, []);

  useEffect(() => {
    if (razaName) {
      const filteredDetails = razaDetails.filter((raza) =>
        raza.nombre.toLowerCase().includes(razaName.toLowerCase())
      );
      setFilteredRazaDetails(filteredDetails);
    } else {
      setFilteredRazaDetails(razaDetails); // Mostrar todas las razas si no hay nombre
    }
  }, [razaName, razaDetails]);

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
    <section className="razaList">
      {filteredRazaDetails.map((raza) => (
        <RazaCard raza={raza} key={uuidv4()} />
      ))}
    </section>
  );
};

export default RazaList;
