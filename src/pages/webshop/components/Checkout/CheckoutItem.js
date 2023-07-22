import { useEffect, useState } from 'react';
import image from '../../assets/product.png';

const CheckoutItem = ({ price }) => {
  const [totalPice, setTotalPrice] = useState(price);
  const [amount, setAmout] = useState(1);

  useEffect(() => {
    setTotalPrice(price * amount);
  }, [amount]);

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
        <img src={image} />
        <div className="details">
          <h2>Spiced Mint Candleaf</h2>
          <span>Verwijder</span>
        </div>
      </div>
      <div className="price">€ 9,99</div>
      <div className="quantity">
        <button onClick={onIncreaseAmount}>+</button>
        <input
          type="number"
          onChange={(event) => setAmout(Number(event.target.value))}
          value={amount}
        />
        <button onClick={onDecreaseAmount}>-</button>
      </div>
      <div className="total">€ {totalPice}</div>
    </div>
  );
};

export default CheckoutItem;
