import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../src/routes/Home";
import ProductDetails from "../src/routes/ProductDetails";
import Error404 from "../src/routes/Error404";
import Cart from "../src/routes/Cart"

import Header from "./components/Header";

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

  // Cart logic

  const [cartProducts, setCartProducts] = useState([]);

  const totalPrice = cartProducts
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

    function removeFromCart(product) {
      setCartProducts(cartProducts.filter((prod) => prod.id !== product.id));
    }

  return (
    <Router>
      <div className="App">
        <Header
          src={stateIn.logo}
          alt={`logo of ${stateIn.title}`}
          cartProducts={cartProducts}
          totalPrice={`${totalPrice} €`}
        />

        <Switch>
          <Route path="/products/:productId">
            <ProductDetails
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              removeFromCart={removeFromCart}
            />
          </Route>
          <Route path="/Cart">
            <Cart setCartProducts={setCartProducts}  cartProducts={cartProducts} removeFromCart={removeFromCart} footerContent={`Total: ${totalPrice} €`} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*"><Error404 /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
