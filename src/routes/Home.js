import { useEffect, useState } from "react";

import { fetchProducts, fetchCategories } from "../services/api";

import Hero from "../components/Hero";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";
import ProductError from "../components/ProductError";
import ProductLoader from "../components/ProductLoader";

import "../App.css";

// int state

const stateIn = {
  title: "Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function Home() {
  // API logic

  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [retry, setRetry] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="App">
      <Hero
        src={stateIn.cover}
        title={stateIn.title}
        description={stateIn.description}
      />

      {products ? (
        <CarouselProducts
          products={searchProduct.length > 0 ? searchProduct : products}
          categories={categories}
        />
      ) : null}

      {apiError ? <ProductError setRetry={setRetry} retry={retry} /> : null}

      {loading ? <ProductLoader /> : null}

      <Footer />
    </div>
  );
}

export default Home;
