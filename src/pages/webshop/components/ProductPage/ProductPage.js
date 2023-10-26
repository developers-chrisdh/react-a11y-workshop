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

  const onPurchageTypeChange = (event) => {
    setPurchaseType(event.target.value);
  };

  const onButtonClick = () => {
    navigate('/website/checkout/cart');
  };

  return (
    <Webshop>
      <div className="container product-page">
        <div className="product-display">
          <div className="product-information">
            <img src={productimage} alt="" />
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
                  {/* eslint-disable-next-line */}
                  <img src={cardWhite} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details">
          <h4>Product specificaties</h4>
          <h6>Materiaal & Geur</h6>
          <table>
            <tr>
              <td>Was:</td>
              <td>
                <span>
                  Sojawas die zorgt voor een rookarme, consistente verbranding
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
          <h6>Meer specs</h6>
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

        <div className="product-description">
          <div>
            <h4>Product omschrijving</h4>
            <p>
              Stap binnen in de betoverende wereld van ontspanning en frisheid
              met onze "Spaced Mint Candleaf" luxe geurkaars. Deze meesterlijk
              vervaardigde kaars belooft niet alleen een heerlijk aroma, maar
              ook een unieke sfeer die je zintuigen zal prikkelen.
            </p>
          </div>

          <div>
            <strong>Geurprofiel:</strong>
            <p>
              Laat je betoveren door de verkwikkende geur van "Spaced Mint
              Candleaf." De kaars begint met de verfrissende tonen van pepermunt
              en eucalyptusblad, die overgaan in een hart van levendige groene
              bladeren en een vleugje kruidige basilicum. De basisnoten van
              cederhout zorgen voor een aardse diepte die je meeneemt op een
              reis door de natuur.
            </p>
          </div>

          <div>
            <strong>Kwaliteit en Duurzaamheid:</strong>
            <p>
              Elke "Spaced Mint Candleaf" geurkaars wordt met de hand
              vervaardigd met behulp van hoogwaardige sojawas en een katoenen
              lont. Deze duurzame materialen bieden niet alleen een schonere
              verbranding, maar minimaliseren ook roetvorming. Onze kaarsen zijn
              milieuvriendelijk en vrij van schadelijke stoffen.
            </p>
          </div>

          <div>
            <strong>Elegante Verpakking:</strong>
            <p>
              De "Spaced Mint Candleaf" geurkaars wordt gepresenteerd in een
              stijlvol glazen vat met een eigentijds ontworpen label. De
              minimalistische uitstraling past naadloos in elk interieur en
              maakt het tot een prachtig cadeau voor jezelf of voor anderen.
            </p>
          </div>
          <div>
            <strong>Toepassingen:</strong>
            <p>
              Deze veelzijdige geurkaars is geschikt voor allerlei gelegenheden.
              Of je nu een rustgevend bad neemt, een romantisch diner hebt, of
              gewoon je dagelijkse leven wat op wilt fleuren, "Spaced Mint
              Candleaf" voegt een vleugje elegantie toe.
            </p>
          </div>
        </div>
      </div>
    </Webshop>
  );
};

export default ProductPage;
