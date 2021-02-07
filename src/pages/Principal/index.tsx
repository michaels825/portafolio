import React, { useEffect } from 'react';
import "./index.scss";
import AppContext from '../../components/App/context/AppContext';
import Rlink from '../../constants/Routes/Rlink';

const Principal = () => {

    const { usePageLink, useStyle } = AppContext.Consumer();
    const [, setPageLink] = usePageLink();
    const [style, setStyle] = useStyle();

    useEffect(() => {
        let styleTemp = Object.assign({}, style);
        styleTemp.body = "max-width";
        styleTemp.footer = "default"
        styleTemp.header = "over";
        styleTemp.animSlider = "horizontal";
        setStyle(styleTemp);

    }, [])

    return <div className="Principal">
        <div className="Principal__container">
            <div className="Principal__container__informacion">
                <h2 className="Principal__container__informacion__saludo">Hello everyone, my name is</h2>
                <h1 className="Principal__container__informacion__nombre">Michael Rojas</h1>
                <h3 className="Principal__container__informacion__profesion">Interaction Designer</h3>
                <div className="Principal__container__informacion__portafolio">

                    <button
                        onClick={() => {
                            setPageLink(Rlink.PORTAFOLIO)
                        }}
                        className="Boton">Portfolio</button>
                </div>

            </div>

            <div className="Principal__container__redes">



            </div>


        </div>

    </div>
}

export default Principal;