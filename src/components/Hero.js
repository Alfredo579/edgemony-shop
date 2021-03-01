import React from 'react'
import { useMediaQuery } from 'react-responsive'
import "./Hero.css"

function Hero({src, title, description}) {

    const isTabletOrLaptop = useMediaQuery({
        query: '(min-device-width: 380px)'
      })

    return (
        <section className="Hero">
            <div className={isTabletOrLaptop? "is-absolute": "is-relative"}>
                <h1>{title}</h1>
                <h2 className={isTabletOrLaptop? "is-visible":"is-not-visible"}>{description}</h2>
            </div>
            <img src={src}/>
        </section>
    )
}

export default Hero