import Webshop from '../../Webshop';
import './ShippingInfo.scss';
import image from '../../../assets/product.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingInfo = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Webshop>
      <div className="dark-background"></div>
      <div className="container shipping-container">
        <div className="wrapper shipping">
          <form action="">
            <div className="contact-info">
              <div className="form-item">
                <h2>Contact</h2>
                <div>
                  Heb je een account? <Link to="#">Login</Link>
                </div>
              </div>
              <input type="text" placeholder="Email of telefoonnummer" />
              <input type="checkbox" id="newsletter" />{' '}
              <label htmlFor="newsletter">
                Ik wil de Candleaf nieuwsbrief intvangen voor 10% korting
              </label>
            </div>

            <div className="shipping-info">
              <h2>Verzend adres</h2>
              <div>
                <input type="text" placeholder="Voornaam" />
                <input type="text" placeholder="Achternaam" />
              </div>
              <div>
                <input type="text" placeholder="Postcode" />
                <input
                  type="text"
                  placeholder="Huisnummer"
                  className="input-small"
                />

                <input
                  type="text"
                  placeholder="Toevoeging"
                  className="input-small"
                />
              </div>
              <div>
                <input type="text" placeholder="Straatnaam" />
                <input type="text" placeholder="Plaats" />
              </div>
              <div>
                <input type="text" placeholder="Opmerking" />
              </div>
              <input type="checkbox" id="save" />
              <label htmlFor="save">
                Sla deze informatie op voor toekomstige bestellingen
              </label>
            </div>

            <div className="actions">
              <Link to="#">Terug naar winkelwagen</Link>
              <button>Afrekenen</button>
            </div>
          </form>
        </div>
        <div className="wrapper shopping-list">
          <div className="products">
            <img src={image} alt="" />
            <div>
              <div className="product-name">Spiced Mint Candleaf</div>

              <div className="price">€ 9,99</div>
            </div>
          </div>

          <div className="coupon">
            <button onClick={() => setShowDialog(true)}>Gebruik coupon</button>
          </div>

          <div className="totals">
            <div>
              <div>Subtotaal</div>
              <div>€ 9,99</div>
            </div>
            <div>
              <div>Verzending</div>
              <div>Berekend in de volgende stap</div>
            </div>
          </div>
          <div className="total">
            <div>
              <div>Totaal</div>
              <div className="price">€ 9 ,99</div>
            </div>
          </div>
        </div>
      </div>
      {showDialog && (
        <div className="overlay">
          <div className="coupon-container">
            <button
              className="close-button"
              aria-label="Sluiten"
              onClick={() => setShowDialog(false)}
              tabIndex={-1}
            >
              x
            </button>
            <h2>Gebruik coupon</h2>
            <div className="coupon">
              <input type="text" placeholder="Coupon code" tabIndex={-1} />
              <button tabIndex={-1}>Voeg toe</button>
            </div>
          </div>
        </div>
      )}
    </Webshop>
  );
};

export default ShippingInfo;
