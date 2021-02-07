import React, { useEffect } from 'react';
import "./index.scss";
import AppContext from '../App/context/AppContext';

const colorsPreload = ["#FF6385", "#080D4A", "#FFBC0A"]

const Preload = () => {

    const { usePreload } = AppContext.Consumer();
    const [preload, setPreload] = usePreload()

    useEffect(() => {

        setTimeout(() => {
            let color = preload.color;
            let state = false;

            setPreload({
                color,
                state
            })

        }, 2000);

    }, [preload])
 
    return <>
        <div className={"Preload" + (preload.state === true ? " anim_logo_back" : " anim_logo_back_salida")} style={{ background: colorsPreload[preload.color] }}></div>
        <div className="Preload__img">
            <div className="Preload__img__container anim_logo">
                <img src="/img/logo/logo.svg" alt="" />
            </div>
        </div>
    </>
}

export default Preload;