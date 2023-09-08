import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.scss';

const Header = () => (
  <nav className="nav">
    <img src={logo} className="logo" alt="logo" width={100} />
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/opdracht">Opdracht</NavLink>
      </li>
      <li>
        <NavLink to="/website">Website</NavLink>
      </li>
      <li>
        <NavLink to="/wcag-rapport">WCAG Rapport</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
