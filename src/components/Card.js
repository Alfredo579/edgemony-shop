import {Link} from "react-router-dom";


import "./Card.css";
import PropTypes from "prop-types"

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


      {/* <button type="button" onClick={openProductModal} className="btnCard">
        Read More!
      </button> */}
      <Link to={`/products/${product.id}`}>
        View Details...
      </Link>

    
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })
}

export default Card;
