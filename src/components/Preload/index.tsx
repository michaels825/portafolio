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
        const refLogoHTML = refLogo.current as HTMLDivElement;


        const animBackground = (e: Event) => {

            const target = e.target as HTMLDivElement;


            if (first === true) {
                setFirst(false)
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


        const animAction = () => {

            let preloadTemp = Object.assign({}, preload) as PreloadProps;
            preloadTemp.pageLink = false;
            preloadTemp.state = false;
            preloadTemp.color = preload.color;
            setPreload(preloadTemp);

        }


        refBackgroundHTML.addEventListener("animationend", animBackground);
        refLogoHTML.addEventListener("animationend", animAction)

        return () => {
            refBackgroundHTML.removeEventListener("animationend", animBackground);
            refLogoHTML.removeEventListener("animationend", animAction)
        }


    }, [preload])



    useEffect(() => {



        return () => {

        }
    }, [])


    const classAnim = (preload.state === true ? (first === false ? " anim_logo_back entrada" : "") : " anim_logo_back_salida")

    const classAnimLogo = (preload.state === true ? " anim_logo" : " anim_logo_salida")
    return <>
        <div ref={refBackground} className={"Preload" +
            classAnim
        } style={{ background: colorsPreload[preload.color] }}></div>
        <div ref={refLogo} className={"Preload__img" + classAnimLogo}>
            <div className="Preload__img__container">
                <img src="/img/logo/logo.svg" alt="" />
            </div>
        </div>
    </>
}

export default Preload;