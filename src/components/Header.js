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
        <NavLink to="/intro">Intro</NavLink>
      </li>
      <li>
        <NavLink to="/opdracht-1">Opdracht 1</NavLink>
      </li>
      <li>
        <NavLink to="/opdracht-2">Opdracht 2</NavLink>
      </li>
      <li>
        <NavLink to="/website">Candleaf Webshop</NavLink>
      </li>
      {/*<li>*/}
      {/*  <NavLink to="/wcag-rapport">WCAG Rapport</NavLink>*/}
      {/*</li>*/}
    </ul>
  </nav>
);

export default Header;
