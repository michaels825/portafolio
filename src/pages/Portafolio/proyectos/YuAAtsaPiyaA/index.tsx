import React, { useEffect, useState } from "react";
import "./index.scss";
import AppContext from '../../../../components/App/context/AppContext';
import AECAnimation from '../../../../constants/AECAnimation/index';
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import ScrollModule from "../../../../components/Scroll/Module";
import FooterNavegacion from '../../../../components/FooterNavegacion/index';
import Footer from '../../../../components/Footer/index';

const YuAAtsaPiyaA = () => {

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


    return <div className="YuAAtsaPiyaA" >

        <div className="YuAAtsaPiyaA__container aec-scroll ">
            <div className="slider__p aec-e aec-color-normal" style={{ backgroundImage: "url('/img/portafolio/yu_a_atsa_piya_a/principal.png')" }}>
                <h1 className="slider__p__titulo">YU’ A ATSA PIYA’A</h1>
                <h3 className="slider__p__subtitulo">Native language learning game</h3>
            </div>

            <div className="max-width space-v padding-h aec-e aec-color-white">
                <div>
                    <h1 className="titulo2">THE PROJECT</h1>
                </div>
                <p className="parrafo1">Yu´ a Atsa Piya ´a, was a tool/game created for the Nasa indigenous community, located in La Primavera, Cauca, Colombia. This platform works as an interactive method for learning Nasa Yuwe (Native Indigenous language of Nasa’s community).</p>
                <p className="parrafo1">The goal was to create a digital solution that satisfy language engagement/learning and digital literacy in kids between 9 - 12. The product was used in a rural environment with limited resources (No internet access and toaster technology).</p>

                <div className="horizontal-space wrap">
                    {[
                        { t: "YEAR", a: "2017" },
                        { t: "TIME FRAME", a: "6 months" },
                        { t: "MY ROLE", a: "Ui team" },
                        { t: "TAGS", a: "Ux, ui, research" },
                    ].map((v, k) => {
                        return <div className="w3 vertical center" key={k}>
                            <h1 className="titulo2">{v.t}</h1>
                            <h1 className="parrafo1 center">{v.a}</h1>
                        </div>
                    })}

                </div>
            </div>

            <div className="horizontal center aec-e aec-fade-in aec-color-normal" style={{ backgroundColor: "#F16385" }}>
                <img src="/img/portafolio/yu_a_atsa_piya_a/juego.png" alt="" />
            </div>

            <div className="max-width horizontal space-v aec-e aec-color-white">
                <div>
                    <img src="/img/portafolio/yu_a_atsa_piya_a/nino.png" alt="" />
                </div>
                <div>
                    <h1 className="titulo1">THE CHALLENGE</h1>
                    <p className="parrafo2">
                        Colombia is one the most culturally diverse countries, for that reason the preservation of a language it’s a really important task for us. The community itself recognize the low engagement showed by its students to learn Nasa Yuwe. The Spanish language, technological changes and the proximity to western society have affected the use and learning of this ancestral language.</p>
                </div>
            </div>
            <div className="max-width horizontal space-v padding-h">
                <p className="parrafo5" style={{ fontSize: "40px" }}>“The real concern it’s the preservation of a language, centuries of history and the community core”
</p>
            </div>



            <div className="max-width space-v padding-h">
                <h1 className="titulo1">FIELDWORK</h1>
                <p className="parrafo1">There’s no better way to understand people you’re designing for than by immersing yourself into their lives and communities. To give you some context, it’s 2017, one year after the final agreement to end the armed conflict in Colombia was signed. Over 40 years of resistance by the Nasa community in its territories have delayed this communities to access new technologies and literacy tools.
                We talked, we were teachers and students, we even played soccer to break the ice.
</p>
                <p className="parrafo1">There were weeks where learning new words was daily, staying in touch with the teacher, asking about every step forward I take, being careful and not making any mistakes that can offend the community.
</p>
            </div>

            <div className="pos-img-3">
                <img style={{ width: "80%" }} src="/img/portafolio/yu_a_atsa_piya_a/nino4.png" alt="" />
            </div>

            <div className="max-width">
                <p className="parrafo6 space-v padding-h">
                    One of the most important activities that we made in field was draw with the kids, we wanted to get how the identify themselves, how they see each other, how they draw their house, the colors they use and every single aspect that we can find to elaborate and create something that really represents the community.
                </p>
            </div>

            <div className="max-width pos-img-2">
                <img style={{ width: "80%" }} src="/img/portafolio/yu_a_atsa_piya_a/dibujo5.png" alt="" />
            </div>

            <div className="max-width">

                <p className="parrafo7 padding-h">
                    Ui team was in charge of interpreting the results of the fieldwork. Drawings, photographs, colors and culture were necessary to begin with the development of the different screens. From the data collected we begin to work.</p>
            </div>

            <div className="horizontal center aec-e aec-fade-in">
                <img style={{ width: "80%" }} src="/img/portafolio/yu_a_atsa_piya_a/wacom-1.png" alt="" />
            </div>

            <div className="horizontal space aec-e aec-fade-in padding-h">
                <img className="space-v" src="/img/portafolio/yu_a_atsa_piya_a/foto-papel-1.png" alt="" />
                <img className="space-v" src="/img/portafolio/yu_a_atsa_piya_a/foto-papel-2.png" alt="" />
                <img className="space-v" src="/img/portafolio/yu_a_atsa_piya_a/foto-papel-3.png" alt="" />

            </div>


            <div className="max-width">

                <p className="parrafo5 padding-h">
                    “We realized different important points for the development of the game, among which the family, the animals and the environment”</p>
            </div>

            <div className="max-width pos-img-4">
                <img style={{ alignSelf: "auto" }} src="/img/portafolio/yu_a_atsa_piya_a/wacom-2.png" alt="" />
                <img style={{ alignSelf: "flex-end" }} src="/img/portafolio/yu_a_atsa_piya_a/wacom-4.png" alt="" />
                <img style={{ alignSelf: "center" }} src="/img/portafolio/yu_a_atsa_piya_a/wacom-3.png" alt="" />
            </div>



            <div className="max-width space-v-min padding-h">
                <h1 className="titulo2">HOW IT WORKS</h1>
                <p className="parrafo2">
                    The product needs to follow the colors, the language, the social hierarchy, the rules and the meaning of the community. This is a powerful metaphor, connecting the digital world with the kids reality itself. It’s really gorgeous to see how the kids look at their teacher in a tiny computer, they smile, they laugh, they enjoy the interaction with something familiar, something that really exists. We’re talking about kids, we need to think about ways to create engagement.
</p>
                <p className="parrafo2">Offering minigames about animals, colors, food, foundation stories, myths, legends and the sense of community.
</p>
            </div>

            <div className="horizontal center aec-e aec-fade-in">
                <img src="/img/portafolio/yu_a_atsa_piya_a/gif.gif" alt="" />
            </div>



            <div className="space-v">

                <AwesomeSlider className="slider-4">
                    {[
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/0.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/1.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/2.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/3.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/4.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/5.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/6.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/7.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/8.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/9.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/10.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/11.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/12.jpg",
                        "/img/portafolio/yu_a_atsa_piya_a/slider2/13.jpg",
                    ].map((v, k) => {
                        return <div key={k} data-src={v} />
                    })}
                </AwesomeSlider>
            </div>

            <div className="max-width padding-h">
                <h1 className="titulo1">CONCLUSION</h1>
                <p className="parrafo7">
                    There’s something special when you work for a community. The kids enjoying something that you’ve created for them, the gratitude that we received and the satisfaction for creating a tool for learning an essential cultural topic.


               </p>
            </div>

            <div className="horizontal center aec-e aec-fade-in">
                <img width="50%" src="/img/portafolio/yu_a_atsa_piya_a/gracias.png" alt="" />
            </div>

           
            <ScrollModule />

            <FooterNavegacion />
            
        </div>

    </div>
}

export default YuAAtsaPiyaA;