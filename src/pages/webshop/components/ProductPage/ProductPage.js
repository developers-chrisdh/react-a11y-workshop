import './ProductPage.scss';
import productimage from '../../assets/product.png';
import cardWhite from '../../assets/card-white.png';
import PurchaseOption from './PurchaseOption';
import { useState } from 'react';
import Webshop from '../Webshop';
import { useNavigate } from 'react-router-dom';

const PURCHASE_TYPE = {
  oneTime: 'oneTime',
  subscription: 'subscription',
};

const ProductPage = () => {
  const navigate = useNavigate();
  const [purchaseType, setPurchaseType] = useState(PURCHASE_TYPE.oneTime);

  const onPurchageTypeChange = (value) => {
    setPurchaseType(value);
  };

  const onButtonClick = () => {
    navigate('/website/checkout/cart');
  };

  return (
    <Webshop>
      <div className="container product-page">
        <div className="product-information">
          <img src={productimage} alt="Product afbeelding" />
          <p>
            Geheel hand gemaakt met natuurlijke sojawas, Candleaf is gemaakt
            voor jouw geluksmomenten.
          </p>
          <p>🚚 GRATIS BEZORGING</p>
        </div>

        <div className="shop-actions">
          <div className="product-name">Spaced Mint Candleaf</div>

          <div className="purchase-details">
            <div className="product-price">&euro; 9,99</div>

            <div className="purchase-actions">
              <PurchaseOption
                value={PURCHASE_TYPE.oneTime}
                isChecked={purchaseType === PURCHASE_TYPE.oneTime}
                onPurchageTypeChange={onPurchageTypeChange}
                title="Eenmalige aankoop"
              />

              <PurchaseOption
                value={PURCHASE_TYPE.subscription}
                isChecked={purchaseType === PURCHASE_TYPE.subscription}
                onPurchageTypeChange={onPurchageTypeChange}
                title="Abonneer voor maandelijkse bezorging"
                description="Abonneer nu en krijg 10% korting op elke bestelling. De
              korting wordt toegepast in het afrekenproces."
                link={{
                  url: '#',
                  label: 'Lees meer.',
                }}
              />
              <button onClick={onButtonClick}>
                <img src={cardWhite} />
              </button>
            </div>

            <div className="product-details">
              <table>
                <tr>
                  <td>Was:</td>
                  <td>
                    <span>
                      Sojawas die zorgt voor een rookarme, consistente
                      verbranding
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Geur:</td>
                  <td>
                    <span>
                      Hoogwaardige ingrediënten met natuurlijke essentiële oliën
                    </span>
                  </td>
                </tr>
              </table>
              <table>
                <tr>
                  <td>Brandtijd:</td>
                  <td>
                    <span>70-75 uur</span>
                  </td>
                  <td>Afmeting:</td>
                  <td>
                    <span>10cm x 5cm</span>
                  </td>
                  <td>Gewicht:</td>
                  <td>
                    <span>400g</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Webshop>
  );
};

export default ProductPage;
