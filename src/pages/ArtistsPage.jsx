import React from "react";

import artists from "../__mocks__/data.json"

import Artists from "../components/Artists";

const ArtistsPage = () => {
    return (
        <div className="artists_page">
            {artists.map((artist) => {
                return (
                    <article key={artist.id}>
                        <Artists name={artist.name} photo={artist.photo} description={artist.description} socials={artist.socials}/>
                    </article>
                )
            })}
        </div>
    )
}

export default ArtistsPage