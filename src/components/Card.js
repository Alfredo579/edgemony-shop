import "./Card.css"

function Card({image, title, price}) {

    return (
        <div>
            <img src={image}/>
            <h3>{title}</h3>
            <h3>{price}</h3>
            <button>Read More!</button>
        </div>
    )
    
}

export default Card