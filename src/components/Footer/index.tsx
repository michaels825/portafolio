import React from "react";
import "./index.scss";
import AppContext from '../App/context/AppContext';

const Footer = () => {

    const { useStyle } = AppContext.Consumer();
    const [style] = useStyle();

    return style.footer === "hiden" ? <></> : <div className="Footer" >
        <div className="Footer__container">
            <div className="Footer__container__name">
                <p>Michael Rojas - 2021</p>
            </div>
            <div className="Footer__container__redes">
                <a href="https://www.linkedin.com/in/michaelrojas825" target="_blank">
                    <img src="/img/icons/linkeing.svg" alt="linkein" />
                </a>
                <a href="https://www.behance.net/michaels8265be" target="_blank">
                    <img src="/img/icons/behance.svg" alt="behance" />
                </a>
            </div>
        </div>
    </div >
}

export default Footer;