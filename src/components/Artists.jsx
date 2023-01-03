import React from "react";

const Artists = ({ name, photo, description, socials }) => {
    return (
        <div className="artists">
            <img src={photo} alt="Artists pic" className="artists__photo" />
            <div>
                <h2 className="artists__name">{name}</h2>
                <p className="artists__description">{description}</p>
                <img src={socials} alt="Artists socials" className="artists__socials" />
            </div>
        </div>
    )
}

export default Artists