import React from "react";
import Logo from "../design/Logo.png"

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Footer" className="footer__logo" />
            <p className="footer__text">&copy; {date} Web site made by HUT</p>
        </footer>
    )
}

export default Footer