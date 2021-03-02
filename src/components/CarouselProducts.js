import Card from "./Card";
import "./CarouselProduct.css"
import { useMediaQuery } from 'react-responsive'
import "./Hero.css"
function CarouselProducts({products}) {

    const isTabletOrLaptop = useMediaQuery({
        query: '(max-device-width: 380px)'
      })

    return (
        <section className={isTabletOrLaptop? "CarouselProducts": "CarouselProducts flex-wrap"}>
            {products.map(pr => {
             return <Card 
            id={pr.id}
            image={pr.image}
            title={pr.title}
            price={pr.price}
            description={pr.description}
            />
            })}
        </section>
    )
    
}

export default CarouselProducts;