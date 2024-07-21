import { Link } from "react-router-dom";

const ClientNav = ({ handleLogout, menuOpen }) => {
  return (
    <nav className={menuOpen ? 'open' : ''}>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/personal">PERSONAL</Link>
        </li>
        <li>
          <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link to="/precios">PRECIOS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li>
          <Link to="/perfil">PERFIL</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>LOGOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ClientNav;
