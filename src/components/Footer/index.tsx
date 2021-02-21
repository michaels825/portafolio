import React from "react";
import "./index.scss";
import AppContext from '../App/context/AppContext';

const Footer = ({ position = "static" }: { position?: "static" | "normal" }) => {

    const { useStyle } = AppContext.Consumer();
    const [style] = useStyle();

    return (style.footer === "hiden" && position === "static") ? <></> : <div className={"Footer" + (position === "static" ? " Footer__over" : " Footer__normal")} >
        <div className="Footer__container">
            {position === "static" ? <></> :

                <div className="Footer__container__contact">
                    <div className="Footer__container__contact__container">
                        <div className="Footer__container__contact__container__title">
                            <h1 className="Footer__container__contact__container__title__lest">Lest’s<span className="Footer__container__contact__container__title__lest__talk">talk!</span></h1>
                        </div>
                        <div className="Footer__container__contact__container__correo">
                            <img src="/img/icons/phone.svg" alt="Email" />
                            <h2>michaels825@hotmail.com</h2>
                        </div>
                    </div>
                </div>
            }

            <div className="Footer__container__page">
                <div className="Footer__container__page__name">
                    <p>Michael Rojas - 2021</p>
                </div>
                <div className="Footer__container__page__redes">
                    <a href="https://www.linkedin.com/in/michaelrojas825" target="_blank">
                        <img src="/img/icons/linkeing.svg" alt="linkein" />
                    </a>
                    <a href="https://www.behance.net/michaels8265be" target="_blank">
                        <img src="/img/icons/behance.svg" alt="behance" />
                    </a>
                </div>
            </div>

        </div>
    </div >
}

export default Footer;