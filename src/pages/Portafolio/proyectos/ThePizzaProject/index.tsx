import React, { useEffect, useState } from "react";
import "./index.scss";
import AppContext from '../../../../components/App/context/AppContext';
import AECAnimation from '../../../../constants/AECAnimation/index';
import ScrollModule from "../../../../components/Scroll/Module";
import FooterNavegacion from '../../../../components/FooterNavegacion/index';

const img = {
    "/img/portafolio/the_pizza_proyect/celular_1.png": "/img/portafolio/the_pizza_proyect/celular_1.png",
    "/img/portafolio/the_pizza_proyect/colores.png": "/img/portafolio/the_pizza_proyect/colores.png",
    "/img/portafolio/the_pizza_proyect/comentarios.png": "/img/portafolio/the_pizza_proyect/comentarios.png",
    "/img/portafolio/the_pizza_proyect/mockup_10.png": "/img/portafolio/the_pizza_proyect/mockup_10.png",
    "/img/portafolio/the_pizza_proyect/mockup_4.png": "/img/portafolio/the_pizza_proyect/mockup_4.png",
    "/img/portafolio/the_pizza_proyect/mockup_5.png": "/img/portafolio/the_pizza_proyect/mockup_5.png",
    "/img/portafolio/the_pizza_proyect/mockup_6.png": "/img/portafolio/the_pizza_proyect/mockup_6.png",
    "/img/portafolio/the_pizza_proyect/mockup_7.png": "/img/portafolio/the_pizza_proyect/mockup_7.png",
    "/img/portafolio/the_pizza_proyect/mockup_8.png": "/img/portafolio/the_pizza_proyect/mockup_8.png",
    "/img/portafolio/the_pizza_proyect/mockup_9.png": "/img/portafolio/the_pizza_proyect/mockup_9.png",
    "/img/portafolio/the_pizza_proyect/mockup_pizaa_3.png": "/img/portafolio/the_pizza_proyect/mockup_pizaa_3.png",
    "/img/portafolio/the_pizza_proyect/mockup_pizza_1.png": "/img/portafolio/the_pizza_proyect/mockup_pizza_1.png",
    "/img/portafolio/the_pizza_proyect/mockup_pizza_2.png": "/img/portafolio/the_pizza_proyect/mockup_pizza_2.png",
    "/img/portafolio/the_pizza_proyect/portada.png": "/img/portafolio/the_pizza_proyect/portada.png",
    "/img/portafolio/the_pizza_proyect/wiframes.png": "/img/portafolio/the_pizza_proyect/wiframes.png",
}

const ThePizzaProject = () => {

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


    return <div className="ThePizzaProject">
        <div className="ThePizzaProject__container aec-scroll">
            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/the_pizza_proyect/portada.png')" }}>
                <h1 className="slider__p__titulo">THE PIZZA PROJECT</h1>
                <h3 className="slider__p__subtitulo">Delivery app concept</h3>
            </div>

            <div className="max-width padding-v padding-h">
                <div >
                    <h1 className="titulo1">THE PROJECT</h1>
                </div>
                <p className="parrafo1 center">Create a mobile app that allows personalization when ordering fast food. Thinking about the different tastes of the person's food, different micro-interactions will be designed, making the choice of ingredients an easier task. The pizza Project’s app is an app that allows to order fast food, such as pizza and pasta. It offers the user the chance to choose their own ingredients, size or order predetermined meals. </p>

                <div className="horizontal-space wrap">
                    {[
                        { t: "YEAR", a: "2018" },
                        { t: "TIME FRAME", a: "5 months" },
                        { t: "MY ROLE", a: "Ui team" },
                        { t: "TAGS", a: "Ux, ui, Graphic design" },
                    ].map((v, k) => {
                        return <div className="w3 vertical center" key={k}>
                            <h1 className="titulo2">{v.t}</h1>
                            <h1 className="parrafo1 center">{v.a}</h1>
                        </div>
                    })}

                </div>
            </div>

            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/the_pizza_proyect/celular_1.png')" }}>

            </div>

            <div className="max-width horizontal space-v padding-h aec-e aec-fade-in">
                <div>
                    <img className="radio" src="/img/portafolio/the_pizza_proyect/comentarios.png" />
                </div>
                <div>
                    <h1 className="titulo1">FIELDWORK</h1>
                    <p className="parrafo2">The application was designed especially for a young audience, which uses more technology to order food. Suitable colors, fonts and textures were chosen for the public and the application.</p>
                </div>
            </div>

            <div className="pos-img-3 aec-e aec-fade-in">
                <img className="radio" style={{ width: "90%" }} src="/img/portafolio/the_pizza_proyect/wiframes.png" />
            </div>
            <div className="pos-img-3 aec-e aec-fade-in">
                <img className="space-v-min radio" style={{ width: "90%" }} src="/img/portafolio/the_pizza_proyect/colores.png" />
            </div>

            <div className="horizontal padding-h center aec-e aec-fade-in">
                <img src="/img/portafolio/the_pizza_proyect/mockup_pizza_0.png" />
            </div>

            <div className="horizontal center max-width center-v space-v aec-e aec-fade-in-bottom">
                <img src="/img/portafolio/the_pizza_proyect/mockup_pizza_3.png" />

            </div>

            <div className="pos-img-3">
                <img src="/img/portafolio/the_pizza_proyect/mockup_4.png" />
            </div>

            <div className="pos-img-6 aec-e aec-fade-in-bottom">
                <img src="/img/portafolio/the_pizza_proyect/mockup_5.png" />
                <img src="/img/portafolio/the_pizza_proyect/mockup_6.png" />
                <img src="/img/portafolio/the_pizza_proyect/mockup_7.png" />
                <img src="/img/portafolio/the_pizza_proyect/mockup_8.png" />
                <img src="/img/portafolio/the_pizza_proyect/mockup_9.png" />
                <img src="/img/portafolio/the_pizza_proyect/mockup_10.png" />
            </div>


            <div className="pos-img-3 space-v padding-h aec-e aec-fade-in-bottom">
                <img style={{width:"60%"}} src="/img/portafolio/the_pizza_proyect/end.png" />
            </div>


            <ScrollModule />

            <FooterNavegacion />
        </div>

    </div >
}

export default ThePizzaProject;