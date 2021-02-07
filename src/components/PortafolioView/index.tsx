import React, { useEffect, useRef, useState } from 'react';
import "./index.scss";
import AppContext from '../App/context/AppContext';
import { PreloadProps } from '../App/context/AppContext';

const PortafolioView = ({ img, titulo, info, link, n }: { n: number, img: string, titulo: string | string[] | JSX.Element, info: string, link: string }) => {

    const { useStyle, usePageLink, usePreload } = AppContext.Consumer();
    const [, setPageLink] = usePageLink();
    const [style, setStyle] = useStyle();
    const [changeAnim, setChangeAnim] = useState<boolean | undefined>(undefined);
    const [hover, setHover] = useState(false);
    const refContainer = useRef<any>();

    const [preload, setPreload] = usePreload();

    const onClick = () => {
        if (changeAnim !== undefined) {
            let styleTemp = Object.assign({}, style);
            styleTemp.animSlider = "vertical";
            setStyle(styleTemp);
            setChangeAnim(true)
        }
    }

    useEffect(() => {
        if (changeAnim === true) {
            let preloadTemp = Object.assign({}, preload) as PreloadProps;
            preloadTemp.active = true;
            setPreload(preloadTemp);
        }
    }, [changeAnim])

    useEffect(() => {
        if (changeAnim === true && preload.active === true) {
            setPageLink(link);
        }
    }, [preload])

    useEffect(() => {
        setChangeAnim(false);
    }, [])

    return <div ref={refContainer} className={"PortafolioView" + (hover ? " hover" : "")} onClick={onClick}>
        <div className="PortafolioView__background" style={{ backgroundImage: "url('" + img + "'" }}></div>
        <div className="PortafolioView__informacion">
            <div className="PortafolioView__informacion__background"></div>
            <h2 className="PortafolioView__informacion__numero">0{n}</h2>
            <div className="PortafolioView__informacion__container">

                <h1 className="PortafolioView__informacion__container__titulo">{titulo}</h1>
                <h1 className="PortafolioView__informacion__container__info">{info}</h1>
            </div>

        </div>

    </div>


    /*
        return <div ref={refContainer} className={"PortafolioView2" + (hover ? " hover" : "")} onClick={onClick}>
            <div className="PortafolioView2__background" style={{ backgroundImage: "url('" + img + "'" }}></div>
            <div className="PortafolioView2__informacion">
                <h1 className="PortafolioView2__informacion__titulo">{titulo}</h1>
                <h1 className="PortafolioView2__informacion__info">{info}</h1>
            </div>
    
        </div>
        */
}

export default PortafolioView;