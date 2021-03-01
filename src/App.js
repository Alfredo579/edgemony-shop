import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselProducts from "./components/CarouselProducts";
import Footer from "./components/Footer";

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {

  return <div className="App">
    <Header src={data.logo} alt={`logo of ${data.title}`}/>
  
    <Hero src={data.cover} title={data.title} description={data.description}/>

    <CarouselProducts products={data.products}/>

    <Footer/>

  </div>;
}

export default App;
