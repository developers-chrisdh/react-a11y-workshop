import './ShopFooter.scss';

import footerLogo from '../../assets/footer-logo.png';

const ShopFooter = () => (
  <footer>
    <div className="container">
      <div className="candleaf">
        <img src={footerLogo} />
        <div className="product-text">
          Uw natuurlijke kaars gemaakt{'\n'}voor uw huis en voor uw welzijn.
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Ontdek</a>
          </li>

          <li>
            <a href="#">Nieuw seizoen</a>
          </li>

          <li>
            <a href="#">Meest gezocht</a>
          </li>

          <li>
            <a href="#">Meest verkocht</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Over Candleaf</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Verzending</a>
          </li>
          <li>
            <a href="#">Winkels</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy beleid</a>
          </li>
          <li>
            <a href="#">Algemene voorwaarden</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default ShopFooter;
