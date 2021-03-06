import { useEffect, useState } from "react";


export default function SearchProduct({setSearchProduct, products, setRetry}) {

  const [inputProduct, setInputProduct] = useState('')

  useEffect(() => {

    console.log(inputProduct)
    if (products) {

      const result = products.filter(function(product) {
 
      return (product.title.toLowerCase().includes(inputProduct) || product.description.toLowerCase().includes(inputProduct));
      })
      
      setSearchProduct(result)
      

    } else {
      setRetry(false)
    }

  }, [inputProduct, setRetry, products, setSearchProduct])

    return <input type="text" onInput={evt=> setInputProduct(evt.target.value)}/>
    
}