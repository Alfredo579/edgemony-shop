
import { useState } from 'react';
import './CreateModalProduct.css'

function CreateModalProduct({title, price, img, description, showModal, setShowModal}) {
    
    // console.log(setShowModal)
    // const [showModal, setShowModal] = useState()
    console.log(showModal)


    

    return (

        <article className={`ModalProduct ${showModal ? `ModalProduct` : `is-hidden`}` }>
            <div className="modal-product-overlay" >
                <div className="modal-product-body">
                    <button className="btn-close-modal" type="button" onClick={() => setShowModal(false)}>X</button>
                    <div className="imgModalContainer">
                      <img src={img}/>  
                    </div>
                    <h2 className="modal-product-title">{title}</h2>
                    <h2 className="modal-product-price">{price}</h2>
                    <h3 className="modal-product-description">{description}</h3>
                </div>
            </div>
        </article> 
    )
     
    
}

export default CreateModalProduct