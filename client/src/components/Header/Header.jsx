import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import Nav from './Nav/Nav';
import AdminNav from './AdminNav/AdminNav';
import ClientNav from './ClientNav/ClientNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userType, setUserType } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
      setUserType(null);
      navigate('/');
    } catch (error) {
      console.error('Error en el logout:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      {userType === 'admin' ? (
        <AdminNav handleLogout={handleLogout} menuOpen={menuOpen} />
      ) : userType === 'cliente' ? (
        <ClientNav handleLogout={handleLogout} menuOpen={menuOpen} />
      ) : (
        <Nav menuOpen={menuOpen} />
      )}
    </header>
  );
};

export default Header;
