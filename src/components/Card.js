import "./Card.css"

function Card({image, title, price}) {

    return (
        <div className="Card">

            <div className="imgContainer">
                <img src={image}/>  
            </div>

            <h3>{title}</h3>
            <h3>&euro;{price}</h3>
            <button className="btnCard">Read More!</button>
        </div>
    )
    
}

export default Card