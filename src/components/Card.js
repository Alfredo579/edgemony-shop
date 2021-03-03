import { useState } from 'react';
import CreateModalProduct from './CreateModalProduct'
import "./Card.css"

function Card({id, image, title, price, description}) {

    const [showModal, setShowModal] = useState(false)

    const openModal = (evt) => {
        console.log("click!");
        evt.preventDefault()
        setShowModal(true)
        console.log(showModal)
    }
    
    


    return (
        <div key={id} className="Card">

            <div className="imgContainer">
                <img src={image}/>  
            </div>

            <h3>{title}</h3>
            <h3>&euro;{price}</h3>
             <button type="button" onClick={openModal} className="btnCard">Read More!</button>
            <CreateModalProduct 
            showModal={showModal} 
            setShowModal={setShowModal}
            img={image}
            title={title}
            price={price}
            description={description}
            />
            
        </div>
    )
    
}

export default Card