import { Link } from "react-router-dom";

const Nav = ({ menuOpen }) => {
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
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
