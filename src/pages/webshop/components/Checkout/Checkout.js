import Webshop from '../Webshop';
import './Checkout.scss';
import image from '../../assets/product.png';
const Checkout = () => {
  return (
    <Webshop>
      <div className="container checkout-page">
        <div className="header">
          <h3>Jouw winkelwagen</h3>
          <a href="/webshop">Verder winkelen</a>
        </div>

        <div className="card">
          <div className="card-item">
            <div className="product">Product</div>
            <div className="price">Price</div>
            <div className="quantity">Quantity</div>
            <div className="total">total</div>
          </div>

          <div className="card-item">
            <div className="product">
              <img src={image} />
              <div className="details">
                <h2>Spiced Mint Candleaf</h2>
                <span>Verwijder</span>
              </div>
            </div>
            <div className="price">€ 9,99</div>
            <div className="quantity">
              <button>+</button>
              <input type="number" value={1} />
              <button>-</button>
            </div>
            <div className="total">€ 9,99</div>
          </div>

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
