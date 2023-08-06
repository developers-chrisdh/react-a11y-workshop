import './ShopHeader.scss';

import logo from '../../assets/logo.png';
import card from '../../assets/card.png';
import account from '../../assets/account.png';
import { Link } from 'react-router-dom';

const ShopHeader = () => (
  <header>
    <div className="container">
      <Link to="/website">
        <img src={logo} alt="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="#">Ontdek</Link>
          </li>
          <li>
            <Link to="#">Over Candleaf</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="card-and-account">
        <Link to="#">
          <img src={account} className="icon" alt="account"></img>
        </Link>
        <Link to="#">
          <img src={card} className="icon" alt="card"></img>
        </Link>
      </div>
    </div>
  </header>
);

export default ShopHeader;
