import { Link } from 'react-router-dom';
import './PurchaseOption.scss';

const PurchaseOption = (props) => {
  const { value, isChecked, onPurchageTypeChange, title, description, link } =
    props;

  return (
    <div className={`purchase-type ${isChecked ? 'selected' : ''}`}>
      <label htmlFor={value}>
        {/* Door gebruik te maken van een echte radio button kan het ook met het toetsenboard bediend worden. */}
        <input
          type="radio"
          value={value}
          checked={isChecked}
          onChange={onPurchageTypeChange}
          id={value}
        />
        <span className="radiobutton" />
        {title}
        {description && <p>{description}</p>}
      </label>
      {link && <Link to={link.url}>{link.label}</Link>}
    </div>
  );
};

export default PurchaseOption;
