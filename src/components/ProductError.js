import { useState } from "react";

import './ProductError.css'

function ErrorProduct({setRetry, retry}) {

    const [isBannerOpen, setIsBannerOpen] = useState(true)

    return (
    <div className={isBannerOpen? `error-container`: `error-container-is-hidden`}>
        <div className="btns-container">
            <button className="btn-retry" onClick={() => setRetry(!retry)}>Retry</button>
            <button className="btn-close-banner" onClick={() => setIsBannerOpen(false)}>X</button>
        </div>
        <h3><span className="is-red">Ops.. </span>Something went wrong.</h3>
    </div>
    )

}

export default ErrorProduct