import "./Header.css";
import HeaderCart from "./HeaderCart";
function Header({ src, alt, cartProduct, setCartProduct }) {
  
  
  return (
    <header className="Header">
      <img src={src} alt={alt} />
        
      <HeaderCart cartProduct={cartProduct} setCartProduct={setCartProduct} />
    </header>
  );
}

export default Header;
