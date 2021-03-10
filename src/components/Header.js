
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
      <img src={src} alt={alt} />

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
