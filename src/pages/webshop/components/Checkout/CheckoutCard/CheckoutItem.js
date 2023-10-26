import { useEffect, useState } from 'react';
import image from '../../../assets/product.png';
import { formatNumber } from '../../../utils/numberUtils';

const CheckoutItem = ({ price, onTotalPriceChange }) => {
  const [totalPice, setTotalPrice] = useState(price);
  const [amount, setAmout] = useState(1);

  useEffect(() => {
    setTotalPrice(price * amount);
  }, [price, amount]);

  useEffect(() => {
    onTotalPriceChange(totalPice);
  }, [totalPice, onTotalPriceChange]);

  const onIncreaseAmount = () => {
    setAmout((amount) => amount + 1);
  };

  const onDecreaseAmount = () => {
    setAmout((amount) => {
      if (amount === 1) {
        return amount;
      }
      return amount - 1;
    });
  };

  return (
    <div className="card-item">
      <div className="product">
        <img src={image} alt="" />
        <div className="details">
          {/* Een heading was in dit geval niet nodig. Dit is een item in de lijst, niet een titel op de pagina. */}
          <div className="product-name">Spiced Mint Candleaf</div>
          <span>Verwijder</span>
        </div>
      </div>
      <div className="price">€ 9,99</div>
      <div className="quantity">
        <button onClick={onDecreaseAmount}>-</button>
        <input
          type="number"
          onChange={(event) => setAmout(Number(event.target.value))}
          value={amount}
        />
        <button onClick={onIncreaseAmount}>+</button>
      </div>
      <div className="total">€ {formatNumber(totalPice)}</div>
    </div>
  );
};

export default CheckoutItem;
