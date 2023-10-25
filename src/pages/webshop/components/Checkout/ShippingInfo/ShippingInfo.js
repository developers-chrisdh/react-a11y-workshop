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
                Ik wil de Candleaf nieuwsbrief ontvangen voor 10% korting
              </label>
            </div>

            <div className="shipping-info">
              <h2>Verzend adres</h2>
              <div>
                <div>
                  {/* Het gebruik van labels helpt gebruikers met ondersteunende technologieen,
                  zoals screenreaders, het formulier te begrijpen.
                  Het helpt mensen met cognitieve stoornissen om te weten wat de velden zijn in
                  het formulier als ze het aan het invullen zijn.
                  
                  Maar het help ook gebruikers zonder beperkingen, bijvoorbeeld als het formulier
                  door de browser al is ingevuld met informatie van formulieren uit het verleden.
                  Zonder label zou je in dat geval niet zien waar een input voor is, en of de gegevens kloppen. */}
                  <label htmlFor="firstname">Voornaam</label>
                  <input type="text" id="firstname" />
                </div>
                <div>
                  <label htmlFor="lastname">Achternaam</label>
                  <input type="text" id="lastname" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="zipcode">Postcode</label>
                  <input type="text" id="zipcode" />
                </div>
                <div className="input-small">
                  <label htmlFor="house-number">Huisnummer</label>
                  <input type="text" id="house-number" />
                </div>
                <div className="input-small">
                  <label htmlFor="addition">Toevoeging</label>
                  <input type="text" id="addition" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="street">Straatnaam</label>
                  <input type="text" id="street" />
                </div>
                <div>
                  <label htmlFor="city">Plaats</label>
                  <input type="text" id="city" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="remark">Opmerking</label>
                  <input type="text" id="remark" />
                </div>
              </div>
              <div>
                <input type="checkbox" id="save" />
                <label htmlFor="save">
                  Sla deze informatie op voor toekomstige bestellingen
                </label>
              </div>
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
              &times;
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
