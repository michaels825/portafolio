import React from 'react';
import "./index.scss";
import AppContext from '../App/context/AppContext';
import Rlink from '../../constants/Routes/Rlink';

const Header = () => {

    const { usePageLink, useStyle } = AppContext.Consumer();
    const [pageLink, setPageLink] = usePageLink();
    const [style] = useStyle()


    return <div className={"Header" + (style.header === "over" ? " Header__over" : "")}>
        <div className="Header__container">
            <div className="Header__container__logo" onClick={() => {
                setPageLink(Rlink.PRINCIPAL)
            }}>
                <img src="/img/logo/logo.svg" alt="Logo" />
            </div>
            <nav className="Header__container__navegacion">
                <ul className="Header__container__navegacion__lista">
                    <li
                        className={"Header__container__navegacion__lista__item"}
                        onClick={() => {
                            setPageLink(Rlink.PRINCIPAL)
                        }}
                    ><a className={"Header__container__navegacion__lista__item__link" + (pageLink === Rlink.PRINCIPAL ? " select" : "")}>Home</a></li>
                    <li
                        className={"Header__container__navegacion__lista__item"}
                        onClick={() => {
                            setPageLink(Rlink.ABOUT)
                        }}
                    ><a className={"Header__container__navegacion__lista__item__link" + (pageLink === Rlink.ABOUT ? " select" : "")}>About</a></li>
                    <li
                        className={"Header__container__navegacion__lista__item"}
                        onClick={() => {
                            setPageLink(Rlink.PORTAFOLIO)
                        }}
                    ><a className={"Header__container__navegacion__lista__item__link" + (pageLink === Rlink.PORTAFOLIO ? " select" : "")}>Portfolio</a></li>
                    <li
                        className={"Header__container__navegacion__lista__item"}
                        onClick={() => {
                            setPageLink(Rlink.CONTANT)
                        }}
                    ><a className={"Header__container__navegacion__lista__item__link" + (pageLink === Rlink.CONTANT ? " select" : "")}>Contact</a></li>
                </ul >
            </nav >
        </div >

    </div >
}

export default Header;