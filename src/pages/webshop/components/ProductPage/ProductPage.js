import './ProductPage.scss';
import productimage from '../../assets/product.png';
import { useState } from 'react';

const PURCHASE_TYPE = {
  oneTime: 'oneTime',
  subscription: 'subscription',
};

const ENTER_KEY = 'Enter';

const ProductPage = () => {
  const [purchaseType, setPurchaseType] = useState(PURCHASE_TYPE.oneTime);

  const onPurchageTypeChange = (event) => {
    setPurchaseType(event.target.value);
  };

  return (
    <div className="container product-page">
      <div className="product-image">
        <img src={productimage} />
      </div>

      <div className="shop-actions">
        <div className="product-name">Spaced Mint Candleaf</div>

        <div className="purchase-details">
          <div className="product-price">&euro; 9,99</div>

          <div className="purches-types">
            <div
              className={`purchase-type ${
                purchaseType === PURCHASE_TYPE.oneTime ? 'selected' : ''
              }`}
            >
              <label for="one-time">
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
              <label for="subscription">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
