import React, { useEffect } from 'react';
import "./index.scss";

import AppContext from '../../components/App/context/AppContext';
import ScrollModule from '../../components/Scroll/Module';

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

                    <div className="horizontal" >
                        <span className="marcador"></span>
                        <div>
                            <div className="About__container__hacer__container__titulo">
                                What i do</div>
                            <ul className="About__container__hacer__container__habilidades">

                                <li><strong>Interaction</strong> design</li>
                                <li><strong>UX/UI</strong> design</li>
                                <li><strong>Design</strong> research</li>
                                <li><strong>Art</strong> direction</li>
                                <li><strong>Brand</strong>Brand design</li>
                                <li><strong>User experience</strong> design</li>
                                <li><strong>Creative</strong> strategy storytelling</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="About__container__herramientas">
                <div className="About__container__herramientas__container max-width">
                    <h1 className="About__container__herramientas__container__titulo">Tools</h1>
                    <ul className="About__container__herramientas__container__lista">
                        <li><img src="/img/icons/programs/after.png" alt="after" /></li>
                        <li><img src="/img/icons/programs/figma.png" alt="figma" /></li>
                        <li><img src="/img/icons/programs/illustrator.png" alt="illustrator" /></li>
                        <li><img src="/img/icons/programs/indesign.png" alt="indesign" /></li>
                        <li><img src="/img/icons/programs/math.png" alt="math" /></li>
                        <li><img src="/img/icons/programs/photoshop.png" alt="photoshop" /></li>
                        <li><img src="/img/icons/programs/premier.png" alt="premier" /></li>
                        <li><img src="/img/icons/programs/xd.png" alt="xd" /></li>
                    </ul>
                </div>
            </div>

            <ScrollModule />

        </div>
    </div>
}

export default About;