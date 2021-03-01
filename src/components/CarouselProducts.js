import Card from "./Card";
import "./CarouselProduct.css"
function CarouselProducts({products}) {
    return (
        <section className="CarouselProducts">
            {products.map(pr => {
             return <Card 
            image={pr.image}
            title={pr.title}
            price={pr.price}
            />
            })};
        </section>
    )
    
}

export default CarouselProducts;