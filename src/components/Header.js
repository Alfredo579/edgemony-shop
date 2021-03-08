import "./Header.css";
import { FaCartPlus } from 'react-icons/fa';


function Header({ src, alt, cartProduct }) {


    const totalPrice = cartProduct
      .map((pr) => pr.price)
      .reduce((a, b) => a + b, 0);


  return (
    <header className="Header">
      <img src={src} alt={alt} />
      <div className="cart-container">
        <h3>Total Price: {totalPrice}</h3>
        <div className="cart-icon">
          <h3><FaCartPlus /></h3>
          <h3 className="cart-count">{cartProduct.length}</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
