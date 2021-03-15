import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselProducts from "./components/CarouselProducts";
import Footer from "./components/Footer";
import ProductError from "./components/ProductError";
import ProductLoader from "./components/ProductLoader";
import ModalProduct from "./components/ModalProduct";
import ModalSidebar from "./components/ModalSidebar";
import ModalCenter from "./components/ModalCenter";
import ProductForModal from "./components/ProductForModal";
import Cart from "./components/Cart";

import ModalCart from "./components/ModalCart";

import { fetchProducts, fetchCategories } from "./services/api";

import "./App.css";

// int state

const stateIn = {
  title: "Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // modalProduct
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productModal, setProductModal] = useState(null);
  const [ModalCartIsOpen, setModalCartIsOpen] = useState(false);

  function openProductModal(product) {
    setProductModal(product);
    setIsOpenModal(true);
  }

  function closeModal(evt) {
    evt.preventDefault();
    setIsOpenModal(false);
    setTimeout(() => {
      setProductModal(null);
    }, 500);
  }

  useEffect(() => {
    if (isOpenModal || ModalCartIsOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isOpenModal, ModalCartIsOpen]);

  // API logic

  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setLoading(true);
    setApiError("");
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
      })
      .catch((err) => setApiError(err.message))
      .finally(() => setLoading(false));
  }, [retry]);

  // filter product
  const [searchProduct, setSearchProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  // cart logic

  const [cartProducts, setCartProducts] = useState([]);

  const inCartProducts = cartProducts.map((cartItem) => {
    const { price, image, title, id } = products.find(
      (p) => p.id === cartItem.id
    );
    return { price, image, title, id, quantity: cartItem.quantity };
  });
  const totalPrice = inCartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  function isInCart(product) {
    return (
      product != null && cartProducts.find((p) => p.id === product.id) != null
    );
  }
  function addToCart(productId) {
    setCartProducts([...cartProducts, { id: productId, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  }
  function setProductQuantity(productId, quantity) {
    setCartProducts(
      cartProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }

  return (
    <div className="App">
      <Header
        src={stateIn.logo}
        alt={`logo of ${stateIn.title}`}
        cartProducts={cartProducts}
        ModalCartIsOpen={ModalCartIsOpen}
        setModalCartIsOpen={setModalCartIsOpen}
        totalPrice={totalPrice}
      />

      <Hero
        src={stateIn.cover}
        title={stateIn.title}
        description={stateIn.description}
      />

      {isOpenModal ? (
        <ModalCenter isOpenModal={isOpenModal} closeModal={closeModal}>
          <ProductForModal
            isOpenModal={isOpenModal}
            product={productModal}
            cartProducts={cartProducts}
            inCart={isInCart(productModal)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </ModalCenter>
      ) :
      
      
      null}

      {ModalCartIsOpen ? (
        <ModalSidebar
          close={() => setModalCartIsOpen(false)}
          totalPrice={totalPrice}
        >
          <Cart
            close={() => setModalCartIsOpen(false)}
            cartProducts={inCartProducts}
            setCartProducts={setCartProducts}
            removeFromCart={removeFromCart}
            setProductQuantity={setProductQuantity}
          />
        </ModalSidebar>
      ) : 
      null}

      {products ? (
        <CarouselProducts
          products={searchProduct.length > 0 ? searchProduct : products}
          openProductModal={openProductModal}
          categories={categories}
        />
      ) : null}

      {apiError ? <ProductError setRetry={setRetry} retry={retry} /> : null}

      {loading ? <ProductLoader /> : null}

      <Footer />
    </div>
  );
}

export default App;
