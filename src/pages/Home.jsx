import React from "react";

import infos from "../__mocks__/infos.json"

import image from "../design/Banner.jpg"

import Banner from "../components/Banner";
import Infos from "../components/Infos";

const Home = () => {
    return (
        <div className="home">
            <div className="homme__banner">
                <Banner image={image} text="Ato music Managment" undertext="Artists Manager" />
            </div>
            <section className="home__infos">
                {infos.map((info) => {
                    return (
                        <article key={info.id}>
                            <Infos title={info.title} text={info.text} />
                        </article>
                    )
                })}
            </section>
        </div>
    )
}


export default Home
