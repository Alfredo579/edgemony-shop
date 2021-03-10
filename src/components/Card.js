import "./Card.css";

function Card({ product, openProductModal }) {



  return (
    <div key={product.id} className="Card">
      <div className="imgContainer">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>&euro;{product.price}</h3>
      <h3>{product.title}</h3>

      <button type="button" onClick={openProductModal} className="btnCard">
        Read More!
      </button>

    
    </div>
  );
}

export default Card;
