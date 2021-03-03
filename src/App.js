import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselProducts from "./components/CarouselProducts";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
// import { data } from "msw/lib/types/context";

const fakeProducts = require("./mocks/data/products.json");

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

      fetch('https://fakestoreapi.com/product')
      .then(response => {
        if (response.ok) {
          response.json()
        } else {
          setLoading(false)
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })

  }, [])
  
  return <div className="App">
    <Header src={stateIn.logo} alt={`logo of ${stateIn.title}`}/>
  
    <Hero src={stateIn.cover} title={stateIn.title} description={stateIn.description}/>

    {error ? 
     <div className="error-container">
       <span className="is-red">Ops.. </span>
      Something went wrong.
       </div>
       : null} 

    {data? <CarouselProducts products={data}/> : null}
    
    {loading ? <div className="circle-loading-container">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </div>: null}


    <Footer/>

  </div>;
}

export default App;
