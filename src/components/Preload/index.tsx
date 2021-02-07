import React, { useEffect, useRef, useState } from 'react';
import "./index.scss";
import AppContext from '../App/context/AppContext';
import { PreloadProps } from '../App/context/AppContext';

const colorsPreload = ["#FF6385", "#080D4A", "#FFBC0A"]


const Preload = () => {

    const { usePreload } = AppContext.Consumer();
    const [preload, setPreload] = usePreload()

    const refBackground = useRef<any>();
    const refLogo = useRef<any>();


    const [first, setFirst] = useState(true);

    /*
        e.addEventListener("animationstart", listener, false);
    e.addEventListener("animationend", listener, false);
    e.addEventListener("animationiteration", listener, false);
    */

    useEffect(() => {
        const refBackgroundHTML = refBackground.current as HTMLDivElement;

        console.log("refBackgroundHTML,", refBackgroundHTML)

        const animBackground = (e: Event) => {
            // console.log("EVENTO FINALIZADO")
            const target = e.target as HTMLDivElement;


            if (first === true) {
                setFirst(false)
                //alert("false")
            }


            if (target.className.includes("entrada")) {
                //Entro a la animacion
                let preloadTemp = Object.assign({}, preload) as PreloadProps;
                preloadTemp.state = false;
                preloadTemp.active = false;
                setPreload(preloadTemp);
            }

            if (target.className.includes("salida")) {
                //Fin de la animacion

            }
        }

        refBackgroundHTML.addEventListener("animationend", animBackground);

        return () => {
            refBackgroundHTML.removeEventListener("animationend", animBackground);
        }


    }, [preload])



    useEffect(() => {
        const refLogoHTML = refLogo.current as HTMLDivElement;
        const animAction = () => {
            refLogoHTML.style.display = "none";

            let preloadTemp = Object.assign({}, preload) as PreloadProps;
            preloadTemp.pageLink = false;
            preloadTemp.state = false;
            preloadTemp.color = preload.color;
            setPreload(preloadTemp);

        }
        refLogoHTML.addEventListener("animationend", animAction)

        return () => {
            refLogoHTML.removeEventListener("animationend", animAction)
        }
    }, [])

    useEffect(() => {


        /*
        setTimeout(() => {
            let color = preload.color;
            let state = false;

            setPreload({
                color,
                state
            })

        }, 2000);
        */

    }, [preload])

    const classAnim = (preload.state === true ? (first === false ? " anim_logo_back entrada" : "") : " anim_logo_back_salida")
    return <>
        <div ref={refBackground} className={"Preload" +
            classAnim
        } style={{ background: colorsPreload[preload.color] }}></div>
        <div ref={refLogo} className="Preload__img">
            <div className="Preload__img__container anim_logo">
                <img src="/img/logo/logo.svg" alt="" />
            </div>
        </div>
    </>
}

export default Preload;