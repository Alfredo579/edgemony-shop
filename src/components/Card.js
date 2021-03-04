// import { useState } from 'react';
// import ModalProduct from './ModalProduct'
import "./Card.css"

function Card({product, openProductModal}) {

    // const [showModal, setShowModal] = useState(false)

    // const openModal = (evt) => {
    //     console.log("click!");
    //     evt.preventDefault()
    //     setShowModal(true)
    //     console.log(showModal)
    // }
    
    


    return (
        <div key={product.id} className="Card">

            <div className="imgContainer">
                <img src={product.image} alt={product.title} />  
            </div>

            <h3>&euro;{product.price}</h3>
            <h3>{product.title}</h3>

            <button type="button" onClick={openProductModal} className="btnCard">Read More!</button>

            {/* <ModalProduct 
            showModal={showModal} 
            setShowModal={setShowModal}
            img={image}
            title={title}
            price={price}
            description={description}
            /> */}
            
        </div>
    )
    
}

export default Card