import ShopHeader from './ShopHeader/ShopHeader';
import ShopFooter from './ShopFooter/ShopFooter';

const Webshop = ({ children }) => (
  <>
    <ShopHeader />
    {children}
    <ShopFooter />
  </>
);

export default Webshop;
