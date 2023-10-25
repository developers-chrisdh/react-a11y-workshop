import { Link } from 'react-router-dom';
import './PurchaseOption.scss';

const PurchaseOption = (props) => {
  const { value, isChecked, onPurchageTypeChange, title, description, link } =
    props;

  return (
    <div
      className={`purchase-type ${isChecked ? 'selected' : ''}`}
      onClick={() => onPurchageTypeChange(value)}
    >
      <div className="radio-item" htmlFor={value}>
        <span className={`radiobutton ${isChecked ? 'checked' : ''}`} />
        <span>{title}</span>
        {description && <p>{description}</p>}
      </div>
      {link && <Link to={link.url}>{link.label}</Link>}
    </div>
  );
};

export default PurchaseOption;
