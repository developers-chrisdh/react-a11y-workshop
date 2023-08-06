import './ShopFooter.scss';

import footerLogo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';

const ShopFooter = () => (
  <footer>
    <div className="container">
      <div className="candleaf">
        <img src={footerLogo} alt="candleaf logo" />
        <div className="product-text">
          Uw natuurlijke kaars gemaakt{'\n'}voor uw huis en voor uw welzijn.
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="#">Ontdek</Link>
          </li>

          <li>
            <Link to="#">Nieuw seizoen</Link>
          </li>

          <li>
            <Link to="#">Meest gezocht</Link>
          </li>

          <li>
            <Link to="#">Meest verkocht</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Over Candleaf</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
          <li>
            <Link to="#">Verzending</Link>
          </li>
          <li>
            <Link to="#">Winkels</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Info</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Privacy beleid</Link>
          </li>
          <li>
            <Link to="#">Algemene voorwaarden</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default ShopFooter;
