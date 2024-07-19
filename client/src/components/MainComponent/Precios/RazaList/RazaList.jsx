import axios from "axios";
import { useEffect, useState } from "react";
import RazaCard from "./RazaCard";
import { v4 as uuidv4 } from "uuid";

const RazaList = ({ razaName }) => {
  const [razaDetails, setRazaDetails] = useState([]);
  const [filteredRazaDetails, setFilteredRazaDetails] = useState([]);

  const getRazaDetails = async (name) => {
    try {
      const response = await axios.get("http://localhost:3000/api/razas");
      return response.data;
    } catch (error) {
      console.error("Error obteniendo servicios", error);
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

  return (
    <section className="razaList">
      {filteredRazaDetails.map((raza) => (
        <RazaCard raza={raza} key={uuidv4()} />
      ))}
    </section>
  );
};

export default RazaList;
