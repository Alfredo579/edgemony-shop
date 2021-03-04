import Card from "./Card";
import "./CarouselProduct.css"
import { useMediaQuery } from 'react-responsive'
import "./Hero.css"
function CarouselProducts({products, openProductModal}) {

    const isTabletOrLaptop = useMediaQuery({
        query: '(max-device-width: 380px)'
    })

    // console.log(products.id)

    return (
        <section className={isTabletOrLaptop? "CarouselProducts": "CarouselProducts flex-wrap"}>
            {products.map(pr => {

            return(
                <Card 
                product={pr}
                key={pr.id}
                openProductModal={() => openProductModal(pr)}
                />
            )})}
            
        </section>
    )
    
}

export default CarouselProducts;