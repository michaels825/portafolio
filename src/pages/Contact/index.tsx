import React, { useEffect } from 'react';
import "./index.scss";
import AppContext from '../../components/App/context/AppContext';

const Contact = () => {

    const { useStyle } = AppContext.Consumer();
    const [style, setStyle] = useStyle();

    useEffect(() => {

        let temStyle = Object.assign({}, style);
        temStyle.header = "over";
        temStyle.body = "default";
        temStyle.footer = "default";
        temStyle.animSlider = "horizontal";
        setStyle(temStyle)

    }, [])



    return <div className="Contact">
        <div className="Contact__container">
            <div className="Contact__container__informacion">
                <h1 className="Contact__container__informacion__lest">Lest’s<span className="Contact__container__informacion__lest__talk">talk!</span></h1>
                <div className="Contact__container__informacion__contacto">
                    <div className="Contact__container__informacion__contacto__email">
                        <img src="/img/icons/email.svg" alt="Email" />
                        <h2 className="Contact__container__informacion__correo">michaels825@hotmail.com</h2>
                    </div>
                    <div className="Contact__container__informacion__contacto__phone">
                        <img src="/img/icons/phone.svg" alt="Phone" />
                        <h2 className="Contact__container__informacion__correo">+57 318 335 7294</h2>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Contact;