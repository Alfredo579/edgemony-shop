import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselProducts from "./components/CarouselProducts";
import Footer from "./components/Footer";
import ProductError from "./components/ProductError";
import ProductLoader from "./components/ProductLoader";
// import { data } from "msw/lib/types/context";

import "./App.css";

// const fakeProducts = require("./mocks/data/products.json");

const stateIn = {
  title: "Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  // products: fakeProducts,
};


function App() {

  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    
    setLoading(true)

    fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data => {
          setData(data)
          setLoading(false)
        })
      } else {
        setLoading(false)
        throw new Error('Something went wrong');
      }
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
      setError(true)
    })
    
  }, [])
  
  return <div className="App">
    <Header src={stateIn.logo} alt={`logo of ${stateIn.title}`}/>
  
    <Hero src={stateIn.cover} title={stateIn.title} description={stateIn.description}/>

    {error ? <ProductError/> : null} 

    {data ? <CarouselProducts products={data}/> : null}
    
    {loading ? <ProductLoader/> : null}

    <Footer/>

  </div>;
}

export default App;
