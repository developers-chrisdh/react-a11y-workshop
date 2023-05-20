import './ShopHeader.scss';

import logo from '../../assets/logo.png';
import card from '../../assets/card.png';
import account from '../../assets/account.png';

const ShopHeader = () => (
  <header>
    <div className="container">
      <img src={logo} />

      <nav>
        <ul>
          <li>Discovery</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>

      <div className="card-and-account">
        <a href="#">
          <img src={account} className="icon" alt="account"></img>
        </a>
        <a href="#">
          <img src={card} className="icon" alt="card"></img>
        </a>
      </div>
    </div>
  </header>
);

export default ShopHeader;
