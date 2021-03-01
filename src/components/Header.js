import "./Header.css";

function Header ({src, alt}) {
    return (
        <header className="Header">
            <img src={src} alt={alt}/>
        </header>
    )
}

export default Header