import "./Footer.css"

function Footer() {
    const thisYear = new Date().getFullYear()
    return (
        <footer>
            <p>{`Edgemony ${thisYear}`} </p>
        </footer>
    );
};

export default Footer;