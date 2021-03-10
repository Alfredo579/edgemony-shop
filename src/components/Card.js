import "./Card.css";

function Card({ product, openProductModal }) {



  return (
    <div key={product.id} className="Card">
      <div className="imgContainer">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="relative-container">
        <h3 className="card-price">&euro;{product.price}</h3>
        <h3 className="card-title">{product.title}</h3>

      </div>


      <button type="button" onClick={openProductModal} className="btnCard">
        Read More!
      </button>

    
    </div>
  );
}

export default Card;
