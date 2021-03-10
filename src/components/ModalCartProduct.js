import "./ModalCartProduct.css";
import { useEffect, useState } from "react";


export default function ModalCartProduct({ product, cartProduct, setCartProduct, id }) {

    const [countQty, setCountQty] = useState(1)

    useEffect(() => {
        
        let cleanList = cartProduct.filter(pr => product.id !== pr.id)
        for (let index = 0; index < countQty; index++) {
            cleanList = [...cleanList, product]
            console.log(cleanList)
        }
        
        
        
        return setCartProduct(cleanList)
        
    }, [countQty])
    
    console.log(cartProduct)


  return (
    <main key={id} className="ModalCartProduct">
      <img className="product-img" src={product.image} alt="" />
      <h4 className="product-title">{product.title}</h4>
      <div className="qty-price-container">
        <div className="qty-container">
          <span onClick={() => setCountQty(countQty+1)} className="btn-qty">+</span>
          <span className="product-qty">{countQty}</span>
          <span onClick={() => setCountQty(countQty-1)} className="product-img">-</span>
        </div>
        <span className="product-price">{product.price} €</span>
      </div>
    </main>
  );
}
