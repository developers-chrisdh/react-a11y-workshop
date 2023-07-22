import Webshop from '../Webshop';
import './Checkout.scss';
import CheckoutItem from './CheckoutItem';
const Checkout = () => {
  return (
    <Webshop>
      <div className="container checkout-page">
        <div className="header">
          <h3>Winkelwagen</h3>
          <a href="/webshop">Verder winkelen</a>
        </div>

        <div className="card">
          <div className="card-item">
            <div className="product">Product</div>
            <div className="price">Prijs</div>
            <div className="quantity">Aantal</div>
            <div className="total">Totaal</div>
          </div>

          <CheckoutItem price={9.99} />

          <div className="card-item">
            <div className="product"></div>
            <div className="subtotal">Sub totaal</div>
            <div className="price">€ 9,99</div>
            <div className="checkout">
              <button>Afrekenen</button>
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
