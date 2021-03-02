import React from 'react';

function ModalProduct(props) {
    return (
        <article className="ModalProduct">
            <div className="modal-product-overlay">
                <div className="modal-product-body">
                    <button type="button" onClick={props.remove}></button>
                    <img src={props.img}/>
                    <h2 className="modal-product-title">{props.title}</h2>
                    <h2 className="modal-product-price">{props.price}</h2>
                    <h3 className="modal-product-description">{props.description}</h3>
                </div>
            </div>
        </article>
    )
}

export default ModalProduct