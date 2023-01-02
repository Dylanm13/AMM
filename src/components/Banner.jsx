import React from "react";

const Banner = ({ image, text, undertext }) => {
    return (
        <div className="thumb">
            <img src={image} alt="Bannière" className="thumb__img" />
            <div className="thumb__overlay"></div>
            <p className="thumb__title">{text}</p>
            <p className="thumb__undertitle">{undertext}</p>
        </div>
    )
}

export default Banner