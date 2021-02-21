import React, { useEffect } from 'react';
import "./index.scss";

import AppContext from '../../components/App/context/AppContext';
import ScrollModule from '../../components/Scroll/Module';
import Footer from '../../components/Footer/index';

const About = () => {

    const { useStyle } = AppContext.Consumer();
    const [style, setStyle] = useStyle();

    useEffect(() => {

        let temStyle = Object.assign({}, style);
        temStyle.header = "over";
        temStyle.body = "default";
        temStyle.footer = "hiden";
        temStyle.animSlider = "horizontal";
        setStyle(temStyle)

    }, [])

    return <div className="About" >
        <div className="About__container">
            <div className="About__container__informacion">
                <h1 className="About__container__informacion__about">About<span className="About__container__informacion__about__me">me</span></h1>
                <h2 className="About__container__informacion__ilove">I love design, traveling and telling stories</h2>
            </div>
            <div className="About__container__sobre">
                <div className="About__container__sobre__informacion  max-width" >
                    <div className="About__container__sobre__informacion__titulo" ><span className="marcador"></span>Who i am</div>
                    <div className="About__container__sobre__informacion__descripcion">
                        <div className="About__container__sobre__informacion__descripcion__contenido">
                            <h4 className="About__container__sobre__informacion__descripcion__contenido__saludo">Hola!</h4>
                            <p className="About__container__sobre__informacion__descripcion__contenido__info">Hello, I am Mike and I am a UI – UX designer. I have a passion for the movies, especially 90’s films. I really like see the pallets, the costumes and the old-fashioned effects. I describe my design in a point between simple and extravagant.
                            </p>
                            <p className="About__container__sobre__informacion__descripcion__contenido__info">
                                I was born in Buga, Colombia, a small town but, with a big history. I also love traveling and explore new cultures. I have lived also in 3 countries, Colombia, USA and Spain. I would say I have friends all around the world, and is really nice to have a friend in almost 30 countries.
                            </p>

                            <p className="About__container__sobre__informacion__descripcion__contenido__info">I am in my last year in ICESI University, a private university located in Cali Colombia. I am studying interactive media designer, a career that mix my hobbies for resolving problems, tell stories and of course… knowing people and points of views. Currently, I have been working for last 3 semesters in the University as part of the design team and I am part of the GAPI (public actions group) which I am developing an app to help emigrant population.</p>
                        </div>
                        <div className="About__container__sobre__informacion__descripcion__imagen">
                            <img src="/img/assests/profile.png" alt="Perfil" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="About__container__hacer">
                <div className="About__container__hacer__container  max-width">
                    <div className="About__container__hacer__container__titulo">
                        What i do</div>

                    <div className="About__container__hacer__container__habilidades">
                        <div className="About__container__hacer__container__habilidades__tarjeta">
                            <img className="About__container__hacer__container__habilidades__tarjeta__img" src="/img/icons/icon-about-1.png" alt="" />
                            <p className="About__container__hacer__container__habilidades__tarjeta__p">User experience design</p>
                        </div>
                        <div className="About__container__hacer__container__habilidades__tarjeta">
                            <img className="About__container__hacer__container__habilidades__tarjeta__img" src="/img/icons/icon-about-2.png" alt="" />
                            <p className="About__container__hacer__container__habilidades__tarjeta__p">Design research</p>
                        </div>
                        <div className="About__container__hacer__container__habilidades__tarjeta">
                            <img className="About__container__hacer__container__habilidades__tarjeta__img" src="/img/icons/icon-about-3.png" alt="" />
                            <p className="About__container__hacer__container__habilidades__tarjeta__p">Creative strategy storytelling</p>
                        </div>
                    </div>


                </div>


            </div>

            <div className="About__container__line">
                <div className="About__container__line__container max-width">
                    <hr />
                </div>

            </div>

            <Footer position="normal" />



            <ScrollModule />

        </div>
    </div>
}

export default About;