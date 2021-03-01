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
            image={pr.image}
            title={pr.title}
            price={pr.price}
            />
            })};
        </section>
    )
    
}

export default CarouselProducts;