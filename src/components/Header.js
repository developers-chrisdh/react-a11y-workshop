import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Header.css';

const Header = () => (
    <nav className="nav">
        <img src={logo} className="logo" alt="logo" width={100}/>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/opdracht">Opdracht</Link>
            </li>
            <li>
                <Link to="/website">Website</Link>
            </li>
        </ul>
    </nav>
);

export default Header;