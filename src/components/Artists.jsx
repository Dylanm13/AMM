import React from "react";

const Artists = ({ name, photo, description }) => {
    return (
        <div className="artists">
            <img src={photo} alt="Artists pic" className="artists__photo" />
            <div>
                <h2 className="artists__name">{name}</h2>
                <p className="artists__description">{description}</p>
            </div>
        </div>
    )
}

export default Artists