import './PurchaseOption.scss';

const PurchaseOption = (props) => {
  const { value, isChecked, onPurchageTypeChange, title, description, link } =
    props;

  return (
    <div className={`purchase-type ${isChecked ? 'selected' : ''}`}>
      <label htmlFor={value}>
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
      {link && <a href={link.url}>{link.label}</a>}
    </div>
  );
};

export default PurchaseOption;
