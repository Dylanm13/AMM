import React from "react";

const Infos = ({ title, text }) => {
    return (
        <div className="infos">
            <h3 className="infos__title">{title}</h3>
            <p className="infos__text">{text}</p>
        </div>
    )
}

export default Infos