import React, { useEffect, useState } from "react";
import "./index.scss";
import AppContext from '../../../../components/App/context/AppContext';
import AECAnimation from '../../../../constants/AECAnimation/index';
import ScrollModule from "../../../../components/Scroll/Module";
import FooterNavegacion from '../../../../components/FooterNavegacion/index';

const img = {
    "/img/portafolio/anonimo/allpage.png": "/img/portafolio/anonimo/allpage.png",
    "/img/portafolio/anonimo/foto5.png": "/img/portafolio/anonimo/foto5.png",
    "/img/portafolio/anonimo/foto_1.png": "/img/portafolio/anonimo/foto_1.png",
    "/img/portafolio/anonimo/foto_2.png": "/img/portafolio/anonimo/foto_2.png",
    "/img/portafolio/anonimo/foto_3.png": "/img/portafolio/anonimo/foto_3.png",
    "/img/portafolio/anonimo/foto_4.png": "/img/portafolio/anonimo/foto_4.png",
    "/img/portafolio/anonimo/foto_6.png": "/img/portafolio/anonimo/foto_6.png",
    "/img/portafolio/anonimo/foto_7.png": "/img/portafolio/anonimo/foto_7.png",
    "/img/portafolio/anonimo/foto_8.png": "/img/portafolio/anonimo/foto_8.png",
    "/img/portafolio/anonimo/foto_9.png": "/img/portafolio/anonimo/foto_9.png",
    "/img/portafolio/anonimo/perfil_1.png": "/img/portafolio/anonimo/perfil_1.png",
    "/img/portafolio/anonimo/perfil_2.png": "/img/portafolio/anonimo/perfil_2.png",
    "/img/portafolio/anonimo/portada.png": "/img/portafolio/anonimo/portada.png",
    "/img/portafolio/anonimo/preview_2.png": "/img/portafolio/anonimo/preview_2.png",
    "/img/portafolio/anonimo/preview_3.png": "/img/portafolio/anonimo/preview_3.png",
}

const Anonimo = () => {

    const { useStyle } = AppContext.Consumer();
    const [style, setStyle] = useStyle();
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        setOnLoad(true);

        let anim = new AECAnimation();
        anim.findClass();

        return () => {
            anim.destroy();
        }

    }, [])

    useEffect(() => {
        if (onLoad === true) {
            let temStyle = Object.assign({}, style);
            temStyle.header = "over";
            temStyle.body = "width-large";
            temStyle.footer = "hiden";
            temStyle.animSlider = "vertical-inverse";
            setStyle(temStyle)
        }
    }, [onLoad])

    return <div className="Anonimo">
        <div className="Anonimo__container aec-scroll">
            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/anonimo/portada.png')" }}>
                <h1 className="slider__p__titulo">ANONIMO</h1>
                <h3 className="slider__p__subtitulo">Short film</h3>
            </div>

            <div className="max-width space-v padding-h">
                <div>
                    <h1 className="titulo1">THE PROJECT</h1>
                </div>
                <p className="parrafo1 center">Anónimo is a short film filmed in Barcelona, Spain between January and February of 2020. Its central idea is the cruising, which is a sexual practice between two men, strangers, in places of the city. Anónimo tells the story of 3 main characters, their life, their routine and their sexuality.</p>

                <div className="horizontal-space wrap">
                    {[
                        { t: "YEAR", a: "2019 - 2020" },
                        { t: "TIME FRAME", a: "9 months" },
                        { t: "MY ROLE", a: "Writer/ Film editing" },
                        { t: "TAGS", a: "Short, picture" },
                    ].map((v, k) => {
                        return <div className="w3 vertical center" key={k}>
                            <h1 className="titulo2">{v.t}</h1>
                            <h1 className="parrafo1 center">{v.a}</h1>
                        </div>
                    })}

                </div>
            </div>


            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/anonimo/preview_2.png')" }}>

            </div>


            <div className="total-space-h" style={{ backgroundColor: "black" }}>
                <div className="max-width space-v-min  padding-h">
                    <h1 className="titulo1">SYNOPSIS</h1>
                    <p className="parrafo1" style={{ color: "white" }}>A lonely sunrise at the beach, some toilets in a mall in the afternoon and a dark forest at night are the places where we will get to know the world of cruising. Looking games, waiting times and the constant search for sexual pleasure in the most public places in Barcelona. We will see through the eyes of 3 characters a hidden universe. </p>
                </div>

                <div className="Anonimo__trailer max-width padding-h">
                    <div className="Anonimo__trailer__card">
                        <img className="Anonimo__trailer__card__fondo" src="/img/portafolio/anonimo/trailer/trailer.gif" />
                        <div className="Anonimo__trailer__card__letra">
                            <img className="Anonimo__trailer__card__letra__container" src="/img/portafolio/anonimo/trailer/a_1.png" />
                        </div>
                    </div>
                    <div className="Anonimo__trailer__card">
                        <img className="Anonimo__trailer__card__fondo" src="/img/portafolio/anonimo/trailer/trailer.gif" />
                        <div className="Anonimo__trailer__card__letra">
                            <img className="Anonimo__trailer__card__letra__container" src="/img/portafolio/anonimo/trailer/a_2.png" />
                        </div>
                    </div>
                    <div className="Anonimo__trailer__card">
                        <img className="Anonimo__trailer__card__fondo" src="/img/portafolio/anonimo/trailer/trailer.gif" />
                        <div className="Anonimo__trailer__card__letra">
                            <img className="Anonimo__trailer__card__letra__container" src="/img/portafolio/anonimo/trailer/a_3.png" />
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: "150px" }} className="max-width padding-h aec-e aec-spin-in">

                    <p className="parrafo7" style={{ color: "#FFBC0A", textAlign: "center" }}>According with the title of the film and to respect the privacy, the characters do not use their names. They are anonymous. There are 3 main location, the beach, the mall and the forest.</p>
                </div>

                <div className="max-width space-v  padding-h">
                    <h1 className="titulo1">THE BEACH</h1>
                    <p className="parrafo1" style={{ color: "white" }}>The first character is around 50 years old. He is a short man that wears glasses and is a little bald. He started cruising 5 years ago. He had never had sex with another man up to that point. He defines himself as heterosexual and he is married to a woman. He usually going to beaches because his first homosexual experience was on one of them. His main motivation is curiosity and pleasure.</p>
                </div>

                <div className="horizontal space">
                    {["/img/portafolio/anonimo/foto_1.png",
                        "/img/portafolio/anonimo/foto_2.png",
                        "/img/portafolio/anonimo/foto_3.png"].map(((img, i) => {
                            return <img src={img} key={i} />
                        }))}
                </div>

                <div className="max-width space-v padding-h">
                    <h1 className="titulo1">THE MALL</h1>
                    <p className="parrafo1" style={{ color: "white" }}>The second character is around 40 years old. He has been cruising since he was 22 years old. He usually has sex with different men at least twice a week in public baths, gyms, and beaches. Their main motivation is to challenge society and the norms of the society.</p>
                </div>

                <div className="horizontal space">
                    {[
                        "/img/portafolio/anonimo/foto_4.png",
                        "/img/portafolio/anonimo/foto_5.png",
                        "/img/portafolio/anonimo/foto_6.png"].map(((img, i) => {
                            return <img src={img} key={i} />
                        }))}
                </div>


                <div className="max-width space-v padding-h">
                    <h1 className="titulo1">THE FOREST</h1>
                    <p className="parrafo1" style={{ color: "white" }}>The last character is 23 years old. His first experience was at his 17 motivated by a friend. He is in constant search of young men like him, but regrets the fact is that most of them are mature men. His favorite place is the Montjuic park.</p>
                </div>

                <div className="horizontal space">
                    {["/img/portafolio/anonimo/foto_7.png",
                        "/img/portafolio/anonimo/foto_8.png",
                        "/img/portafolio/anonimo/foto_9.png"].map(((img, i) => {
                            return <img src={img} key={i} />
                        }))}
                </div>


                <div className="Anonimo__cine" style={{ backgroundImage: `url("/img/portafolio/anonimo/cine.png")` }}>
                    <iframe src="https://player.vimeo.com/video/509268328" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>

                </div>

                <div className="horizontal space Anonimo__perfil">
                    <div className="Anonimo__perfil__nombres">
                        <h1 className="titulo1">TEAM</h1>
                        <div className="Anonimo__perfil__nombres__fotos horizontal space">

                            {[
                                { name: "Michael Rojas", img: "/img/portafolio/anonimo/perfil_1.png" },
                                { name: "Manu Roma", img: "/img/portafolio/anonimo/perfil_2.png" }
                            ].map(((img, i) => {
                                return <div className="Anonimo__perfil__nombres__fotos__foto">
                                    <img src={img.img} key={i} />
                                    <h2>{img.name}</h2>
                                </div>
                            }))}
                        </div>
                    </div>
                    <div className="Anonimo__perfil__creditos">
                        <h1 className="titulo1">CREDITS</h1>
                        <p className="parrafo1" style={{ color: "white" }}>
                            <p><strong>Written by:</strong> Michael Rojas and Manu Roma,</p>
                            <p><strong>Directed by:</strong> Manu Roma,</p>
                            <p><strong>Original idea:</strong> Manu Roma,</p>
                            <p><strong>Edition:</strong> Michael Rojas and Manu Roma,</p>
                            <p><strong>Sound edition:</strong> Michael Rojas,</p>
                            <p><strong>Phorography Director:</strong> Manu Roma and Michael Rojas,</p>
                                TecnoCampus 2020, Barcelona,
                                <p><strong>Running time:</strong> 19 minutes,</p>
                            <p><strong>Format:</strong> 1080p, .mp4.,</p>
                            <p><strong>Size:</strong> 16:9,</p>
                        </p>

                    </div>
                </div>

                <div className="pos-img-2 padding-v aec-e aec-fade-in-bottom">
                    <img style={{ width: "40%", marginTop: "40px", marginBottom: "100px" }} src="/img/portafolio/anonimo/gracias.png" />
                </div>


            </div>


            <ScrollModule />

            <FooterNavegacion />

        </div>

    </div>
}

export default Anonimo;