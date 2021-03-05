import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CarouselProducts from "./components/CarouselProducts";
import Footer from "./components/Footer";
import ProductError from "./components/ProductError";
import ProductLoader from "./components/ProductLoader";
import ModalProduct from "./components/ModalProduct"

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

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [productModal, setProductModal] = useState(null)

  function openProductModal (product) {
    setProductModal(product)
    setIsOpenModal(true)
  }
  
  function closeModal (evt) {
    evt.preventDefault()
    setIsOpenModal(false)
    setTimeout(() => {
      setProductModal(null)
    }, 500)
  }
  
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [ isOpenModal ])
  
  // API logic

  const [products, setProducts] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [retry , setRetry ] = useState(false)
  


  
  useEffect(() => {
    
    setLoading(true)

    fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data => {
          setProducts(data)
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
    
  }, [ retry ])

  // search in product
  const [inputProduct, setInputProduct] = useState('')
  const [searchProduct, setSearchProduct] = useState([])
  

  useEffect(() => {

    console.log(inputProduct)
    if (products) {

      const result = products.filter(function(product) {

        return (product.title.includes(inputProduct) || product.description.includes(inputProduct));
      })
      
      setSearchProduct(result)
      
      console.log(searchProduct)

    } else {
      setRetry(false)
    }

  }, [inputProduct])




  return (

        <div className="App">
          <Header src={stateIn.logo} alt={`logo of ${stateIn.title}`}/>
        
          <Hero src={stateIn.cover} title={stateIn.title} description={stateIn.description}/>

          {isOpenModal ? 
            <ModalProduct 
          isOpenModal={isOpenModal}
          closeModal={closeModal}
          product={productModal}
          />
          : null }

          <input type="text" onChange={evt=> setInputProduct(evt.target.value)}/>

          {products ? <CarouselProducts products={searchProduct.length > 0 ? searchProduct : products} openProductModal={openProductModal} /> : null}

          {error ? <ProductError retry={() => setRetry(!retry)} /> : null} 
          
          {loading ? <ProductLoader/> :  null }

          <Footer/>

        </div>
  )
}

export default App;
