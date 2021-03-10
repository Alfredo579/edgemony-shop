
import './ModalProduct.css'

function ModalProduct({product, isOpenModal, closeModal, setCartProduct, cartProduct}) {

    // const [clicked, setClicked] = useState(true)

    const addCartProduct = (product) => {
        setCartProduct((oldCartProduct) => oldCartProduct.includes(product)?[...oldCartProduct]: [...oldCartProduct, product]  )
    } 

    
    return (
        <article className={`ModalProduct ${isOpenModal ? `ModalProduct` : `is-hidden`}` }>
            <div className="modal-product-overlay" >
                <div className="modal-click-close" onClick={closeModal}></div>
                <div className="modal-product-body">
                    <button className="btn-close-modal" type="button" onClick={closeModal}>X</button>
                    
                            <div className="imgModalContainer">
                            <img src={product.image} alt={product.title} />  
                            </div>
                            <h2 className="modal-product-price">{product.price}</h2>
                            <h2 className="modal-product-title">{product.title}</h2>
                            <h3 className="modal-product-description">{product.description}</h3>
                            <button disabled={cartProduct.includes(product)} className={`btn-addCart ${cartProduct.includes(product) ? `is-grey` : `` }` } onClick={() => addCartProduct(product)}>{cartProduct.includes(product) ?`Added to Cart`: `Add to Cart` }</button>
                </div>
            </div>
        </article> 
    )
     
    
}

export default ModalProduct