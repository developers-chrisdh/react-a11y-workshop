import './ProductPage.scss';
import productimage from '../../assets/product.png';
import cardWhite from '../../assets/card-white.png';
import { useState } from 'react';

const PURCHASE_TYPE = {
  oneTime: 'oneTime',
  subscription: 'subscription',
};

const ProductPage = () => {
  const [purchaseType, setPurchaseType] = useState(PURCHASE_TYPE.oneTime);

  const onPurchageTypeChange = (event) => {
    setPurchaseType(event.target.value);
  };

  const onButtonClick = () => {
    console.log('click');
  };

  return (
    <div className="container product-page">
      <div className="product-information">
        <img src={productimage} />
        <p>
          All hand-made with natural soy wax, Candleaf is made for your pleasure
          moments.
        </p>
        <p>🚚 FREE SHIPPING</p>
      </div>

      <div className="shop-actions">
        <div className="product-name">Spaced Mint Candleaf</div>

        <div className="purchase-details">
          <div className="product-price">&euro; 9,99</div>

          <div className="purches-actions">
            <div
              className={`purchase-type ${
                purchaseType === PURCHASE_TYPE.oneTime ? 'selected' : ''
              }`}
            >
              <label htmlFor="one-time">
                <input
                  type="radio"
                  value={PURCHASE_TYPE.oneTime}
                  checked={purchaseType === PURCHASE_TYPE.oneTime}
                  onChange={onPurchageTypeChange}
                  id="one-time"
                />
                <span className="radiobutton" />
                One time purchase
              </label>
            </div>

            <div
              className={`purchase-type ${
                purchaseType === PURCHASE_TYPE.subscription ? 'selected' : ''
              }`}
            >
              <label htmlFor="subscription">
                <input
                  type="radio"
                  value={PURCHASE_TYPE.subscription}
                  checked={purchaseType === PURCHASE_TYPE.subscription}
                  onChange={onPurchageTypeChange}
                  id="subscription"
                />
                <span className="radiobutton" />
                Subscribe and delivery every month
                <p>
                  Subscribe now and get the 10% of discount on every recurring
                  order. The discount will be applied at checkout.
                </p>
              </label>
              <a href="#">Read more.</a>
            </div>

            <button onClick={onButtonClick}>
              <img src={cardWhite} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
