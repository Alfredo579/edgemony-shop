import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import HeaderCart from "./HeaderCart";
function Header({
  src,
  alt,
  cartProducts,
  ModalCartIsOpen,
  setModalCartIsOpen,
  totalPrice,
}) {
  return (
    <header className="Header">
      <Link to="/Home">
        <img src={src} alt={alt} />
      </Link>

      <HeaderCart
        cartProducts={cartProducts}
        ModalCartIsOpen={ModalCartIsOpen}
        setModalCartIsOpen={setModalCartIsOpen}
        totalPrice={totalPrice}
      />
    </header>
  );
}

export default Header;
