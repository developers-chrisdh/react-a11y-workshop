import { useState } from 'react';
import Webshop from '../../Webshop';
import './CheckoutCard.scss';
import CheckoutItem from './CheckoutItem';
import { Link, useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../utils/numberUtils';

const Checkout = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(9.99);
  return (
    <Webshop>
      <div className="container checkout-page">
        <div className="header">
          {/* Een goede hiërarchische structuur van de headings helpt screenreader gebruikers de hiërarchie en content van de website te begrijpen  */}
          <h3>Winkelwagen</h3>
          <Link to="/webshop">Verder winkelen</Link>
        </div>

        <div className="card">
          <div className="card-item">
            <div className="product">Product</div>
            <div className="price">Prijs</div>
            <div className="quantity">Aantal</div>
            <div className="total">Totaal</div>
          </div>

          <CheckoutItem
            price={9.99}
            onTotalPriceChange={(totalPrice) => setTotalPrice(totalPrice)}
          />

          <div className="card-item">
            <div className="product"></div>
            <div className="subtotal">Sub totaal</div>
            <div className="price">€ {formatNumber(totalPrice)}</div>
            <div className="checkout">
              <button onClick={() => navigate('/website/checkout/shipping')}>
                Afrekenen
              </button>
            </div>
            <div className="shipping-info">
              Verzendkosten worden later berekend
            </div>
          </div>
        </div>
      </div>
    </Webshop>
  );
};

export default Checkout;
