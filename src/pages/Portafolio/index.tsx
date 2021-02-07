import React, { useEffect, useRef, useState } from 'react';
import "./index.scss";
import PortafolioView from '../../components/PortafolioView/index';
import AppContext from '../../components/App/context/AppContext';
import ScrollModule from '../../components/Scroll/Module';
import Rlink from '../../constants/Routes/Rlink';

export const PortafolioPages = {
    yu_a_atsa_piya_a: Rlink.PORTAFOLIO + "/yu_a_atsa_piya_a",
    anonimo: Rlink.PORTAFOLIO + "/anonimo",
    e_compras: Rlink.PORTAFOLIO + "/e_compras",
    the_pizza_project: Rlink.PORTAFOLIO + "/the_pizza_project",
    a_a: Rlink.PORTAFOLIO + "/a+a",
    califest: Rlink.PORTAFOLIO + "/califest",
}

const Portafolio = () => {
    const { useStyle } = AppContext.Consumer();
    const [style, setStyle] = useStyle();
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {

        let temStyle = Object.assign({}, style);
        temStyle.header = "over";
        temStyle.body = "width-large";
        temStyle.footer = "hiden";
        if (temStyle.animSlider !== "vertical") {
            temStyle.animSlider = "horizontal";
        } else if (temStyle.animSlider === "vertical") {
            setOnLoad(true);
        }
        setStyle(temStyle)

        /*
        let listHtml = document.querySelector(".Portafolio__container__lista") as HTMLDivElement;
        let listHtmlScrollSliderBarra = document.querySelector(".Portafolio__container__lista__scroll__barra") as HTMLDivElement;
        if (listHtml) {
            listHtmlScroll.style.height = listHtml.offsetWidth+ "px";
            listHtmlScrollSliderBarra.style.height = listHtml.scrollWidth + "px";
            
            
            listHtmlScroll.addEventListener("scroll", (e) => {
                
                listHtml.scrollLeft = listHtmlScroll.scrollTop;
            })
        }
        */


    }, [])

    useEffect(() => {
        if (onLoad === true) {
            let temStyle = Object.assign({}, style);
            temStyle.animSlider = "horizontal";
            setStyle(temStyle)
        }

    }, [onLoad])

    const refLista = useRef<any>();

    return <div className="Portafolio">
        <div className="Portafolio__container">
            <div ref={refLista} className="Portafolio__container__lista" >
                <PortafolioView
                    n={1}
                    img="/img/portafolio/preview/yuaatsapiyaa.png"
                    titulo="Yu’ a atsa piya’a"
                    info="Language learning game"
                    link={PortafolioPages.yu_a_atsa_piya_a} />
                <PortafolioView
                    n={2}
                    img="/img/portafolio/preview/anonimo.png"
                    titulo="Anonimo"
                    info="Short film"
                    link={PortafolioPages.anonimo} />
                <PortafolioView
                    n={3}
                    img="/img/portafolio/preview/ecompras.png"
                    titulo="E Compras"
                    info="Ux / ui design"
                    link={PortafolioPages.e_compras} />
                <PortafolioView
                    n={4}
                    img="/img/portafolio/preview/pizza.png"
                    titulo={<>The<br />Pizza<br />Project</>}
                    info="Mobile app"
                    link={PortafolioPages.the_pizza_project} />

                <PortafolioView
                    n={5}
                    img="/img/portafolio/preview/califest.png"
                    titulo="Califest"
                    info="Web design"
                    link={PortafolioPages.califest} />
                {/*
                    <PortafolioView
    
                        img="/img/portafolio/preview/aa.png"
                        titulo={<>A<span style={{ fontFamily: "Coolvetica" }}>+</span>A</>}
                        info="Ux / ui design"
                        link={PortafolioPages.a_a} />
                    * */}

            </div>

        </div>
    </div>
}

export default Portafolio;