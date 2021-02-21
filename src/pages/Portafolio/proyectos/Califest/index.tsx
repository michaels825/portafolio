import React, { useEffect, useState } from "react";
import "./index.scss";
import AppContext from '../../../../components/App/context/AppContext';
import AECAnimation from '../../../../constants/AECAnimation/index';
import ScrollModule from "../../../../components/Scroll/Module";
import FooterNavegacion from '../../../../components/FooterNavegacion/index';

const img = {
    "/img/portafolio/califest/historias.png": "/img/portafolio/califest/historias.png",
    "/img/portafolio/califest/lugares.png": "/img/portafolio/califest/lugares.png",
    "/img/portafolio/califest/mapa.png": "/img/portafolio/califest/mapa.png",
    "/img/portafolio/califest/mockup_1.png": "/img/portafolio/califest/mockup_1.png",
    "/img/portafolio/califest/mockup_2.png": "/img/portafolio/califest/mockup_2.png",
    "/img/portafolio/califest/portada.png": "/img/portafolio/califest/portada.png",
    "/img/portafolio/califest/tienda.png": "/img/portafolio/califest/tienda.png",
    "/img/portafolio/califest/landing.png": "/img/portafolio/califest/landing.png",
}

const Califest = () => {

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

    return <div className="Califest">

        <div className="Califest__container">
            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/califest/portada.png')" }}>
                <h1 className="slider__p__titulo">CALIFEST</h1>
                <h3 className="slider__p__subtitulo">Web design</h3>
            </div>

            <div className="padding-v white">
                <div className="max-width padding-h">
                    <div style={{ width: "100%", height: "100px" }}></div>
                    <div >
                        <h1 className="titulo1">THE PROJECT</h1>
                    </div>
                    <p className="parrafo1 center">Create a mobile app that allows personalization when ordering fast food. Thinking about the different tastes of the person's food, different micro-interactions will be designed, making the choice of ingredients an easier task. The pizza Project’s app is an app that allows to order fast food, such as pizza and pasta. It offers the user the chance to choose their own ingredients, size or order predetermined meals.</p>

                    <div className="horizontal-space wrap">
                        {[
                            { t: "YEAR", a: "2019" },
                            { t: "TIME FRAME", a: "3 months" },
                            { t: "MY ROLE", a: "UI/UX" },
                            { t: "TAGS", a: "Web design, Ui, Ux" },
                        ].map((v, k) => {
                            return <div className="w3 vertical center" key={k}>
                            <h1 className="titulo2">{v.t}</h1>
                            <h1 className="parrafo1 center">{v.a}</h1>
                        </div>
                        })}

                    </div>
                    <div style={{ width: "100%", height: "100px" }}></div>
                </div>

            </div>

            <div className="pos-img-3">
                <img src="/img/portafolio/califest/mockup_1.png" />

            </div>

            <div className="pos-img-3 padding-h">

                <img className="space-v" style={{ width: "80%" }} src="/img/portafolio/califest/mockup_2.png" />
            </div>

            <div className="max-width padding-h">
                <p style={{ color: "white", textAlign: "center" }} className="parrafo7 max-width">An illustration will be displayed on the home page along with a call to action to invite people to buy tickets. Later, an advertising banner will be displayed showing the
                festival experience. The news, description and line up of the event will be
displayed on the same page.</p>

            </div>

            <div className="pos-img-3  padding-h">
                <img className="space-v" style={{ width: "80%" }} src="/img/portafolio/califest/historias.png" />
            </div>

            <div className="max-width padding-h space-v">

                <p style={{ color: "white", textAlign: "center" }} className="parrafo7 max-width">In the virtual store, people will be able to filter their products by artist, genre and price. The new collections will be displayed first and then the existing collection.
In the following interface the price and description of the product will be shown, you will have the option to add it to the cart or to favorites.</p>
            </div>

            <div className="pos-img-3 padding-h">
                <img style={{ width: "80%", marginBottom: "100px" }} src="/img/portafolio/califest/landing.png" />
                <img style={{ width: "80%" }} src="/img/portafolio/califest/tienda.png" />
            </div>

            <div className="max-width padding-h">
                <p style={{ color: "white", textAlign: "center" }} className="parrafo7 space-v max-width">On the virtual stage you can go through the entire map of the music festival, exploring the stages where the artists will be present. You will live the experience as if you were really at the festival.</p>
            </div>


            <div className="pos-img-3 padding-h">
                <img style={{ width: "80%" }} src="/img/portafolio/califest/mapa.png" />
                <img className="space-v" style={{ width: "80%" }} src="/img/portafolio/califest/lugares.png" />
            </div>

            <div className="pos-img-3 padding-h">
                <img style={{width:"80%", marginBottom:"80px"}} src="/img/portafolio/califest/end.png" />

            </div>

            <ScrollModule />
            <FooterNavegacion />
        </div>

    </div>
}

export default Califest;