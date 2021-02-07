import React, { useEffect, useState } from "react";
import "./index.scss";
import AppContext from '../../../../components/App/context/AppContext';
import AECAnimation from '../../../../constants/AECAnimation/index';
import ScrollModule from "../../../../components/Scroll/Module";
import FooterNavegacion from '../../../../components/FooterNavegacion/index';

const img = {
    "/img/portafolio/e_compras/aplicacion.png": "/img/portafolio/e_compras/aplicacion.png",
    "/img/portafolio/e_compras/colores.png": "/img/portafolio/e_compras/colores.png",
    "/img/portafolio/e_compras/comentario_1.png": "/img/portafolio/e_compras/comentario_1.png",
    "/img/portafolio/e_compras/comentario_2.png": "/img/portafolio/e_compras/comentario_2.png",
    "/img/portafolio/e_compras/comentario_3.png": "/img/portafolio/e_compras/comentario_3.png",
    "/img/portafolio/e_compras/consulta_1.png": "/img/portafolio/e_compras/consulta_1.png",
    "/img/portafolio/e_compras/consulta_2.png": "/img/portafolio/e_compras/consulta_2.png",
    "/img/portafolio/e_compras/consulta_3.png": "/img/portafolio/e_compras/consulta_3.png",
    "/img/portafolio/e_compras/consulta_4.png": "/img/portafolio/e_compras/consulta_4.png",
    "/img/portafolio/e_compras/consulta_5.png": "/img/portafolio/e_compras/consulta_5.png",
    "/img/portafolio/e_compras/consulta_6.png": "/img/portafolio/e_compras/consulta_6.png",
    "/img/portafolio/e_compras/flujo.png": "/img/portafolio/e_compras/flujo.png",
    "/img/portafolio/e_compras/foto_1.png": "/img/portafolio/e_compras/foto_1.png",
    "/img/portafolio/e_compras/foto_2.png": "/img/portafolio/e_compras/foto_2.png",
    "/img/portafolio/e_compras/mockup_1.png": "/img/portafolio/e_compras/mockup_1.png",
    "/img/portafolio/e_compras/mockup_2.png": "/img/portafolio/e_compras/mockup_2.png",
    "/img/portafolio/e_compras/portada.png": "/img/portafolio/e_compras/portada.png",
    "/img/portafolio/e_compras/pruebas_usuarios.png": "/img/portafolio/e_compras/pruebas_usuarios.png",
}

const ECompras = () => {

    const { useStyle } = AppContext.Consumer();
    const [style, setStyle] = useStyle();
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        setOnLoad(true);

        let anim = new AECAnimation();
        anim.findClass();

        return () => {
            anim.destroy();
        }

    }, [])

    useEffect(() => {
        if (onLoad === true) {
            let temStyle = Object.assign({}, style);
            temStyle.header = "over";
            temStyle.body = "width-large";
            temStyle.footer = "hiden";
            temStyle.animSlider = "vertical-inverse";
            setStyle(temStyle)
        }
    }, [onLoad])

    return <div className="ECompras">
        <div className="ECompras__container">
            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/e_compras/portada.png')" }}>
                <h1 className="slider__p__titulo"><span className="slider__p__titulo__s">E</span>COMPRAS</h1>
                <h3 className="slider__p__subtitulo">Ux / ui design</h3>
            </div>

            <div className="max-width padding-v padding-h">
                <div >
                    <h1 className="titulo1">THE PROJECT</h1>
                </div>
                <p className="parrafo1">E-Compras is a virtual platform developed for Icesi University, located in Cali, Colombia. Its main function is the management of tangible and intangible resources necessary for the operation of the institution. a new platform, faster, easier, more efficient. The E-Compras team asked for help to the design department to solve a large number of issues on the current platform. It is a web page that is used by different people from the University, as well as secretaries, program directors and the E-Compras team.</p>

                <div className="horizontal-space">
                    {[
                        { t: "YEAR", a: "2020" },
                        { t: "TIME FRAME", a: "5 months" },
                        { t: "MY ROLE", a: "Ui team" }
                    ].map((v, k) => {
                        return <div key={k}>
                            <h1 className="titulo2">{v.t}</h1>
                            <h1 className="parrafo1">{v.a}</h1>
                        </div>
                    })}

                </div>
            </div>

            <div className="slider__p" style={{ backgroundImage: "url('/img/portafolio/e_compras/aplicacion.png')" }}>

            </div>

            <div className="max-width padding-v">
                <h1 className="titulo1">THE CHALLENGE</h1>
                <p className="parrafo7 padding-h">Create a more friendly and optimal work platform for Icesi University employees, redesigning the graphic design and interaction with the E-compras platform.</p>
            </div>

            <div className="horizontal center space-v">
                {[
                    "/img/portafolio/e_compras/foto_1.png",
                ].map(((img, i) => {
                    return <img className="radio" src={img} key={i} />
                }))}
            </div>

            <div className="horizontal center">
                <h1 className="titulo1">PEOPLE</h1>
            </div>
            <div className="pos-img-2 padding-h">
                <img style={{ width: "100%" }} src="/img/portafolio/e_compras/tarjetas.png" />
            </div>
            {/**
  <div className="horizontal space">
                {[
                    {
                        cargo: "Applicant",
                        img: "/img/portafolio/e_compras/comentario_1.png",
                        name: "Erika",
                        info: "She is responsible for requesting buying a product, good or service you need to carry out your work."
                    },
                    {
                        cargo: "Analyst",
                        img: "/img/portafolio/e_compras/comentario_2.png",
                        name: "Javier",
                        info: "He is responsible for receiving the request and to carry out an analysis of different quotes from good desired."
                    },
                    {
                        cargo: "Approver",
                        img: "/img/portafolio/e_compras/comentario_3.png",
                        name: "Juan",
                        info: "He is in charge of approving, rejecting and analyze the purchase request, taking into account the budget and the quotes made by analysts."
                    },
                ].map((c, i) => {
                    return <div className="card" key={i} >
                        <h1 className="titulo3">{c.cargo}</h1>
                        <img src={c.img} />
                        <div>
                            <h1 className="titulo4">{c.name}</h1>
                            <p className="parrafo4">{c.info}</p>
                        </div>
                    </div>
                })}
                <div>

                </div>
            </div>
 */}


            <div className="space-v">
                <h1 className="titulo1">FIELDWORK</h1>
                <div className="pos-img-2 padding-h">
                    {
                        [
                            "/img/portafolio/e_compras/consulta_1.png",
                            "/img/portafolio/e_compras/consulta_2.png",
                            "/img/portafolio/e_compras/consulta_3.png",
                            "/img/portafolio/e_compras/consulta_4.png",
                            "/img/portafolio/e_compras/consulta_5.png",
                            "/img/portafolio/e_compras/consulta_6.png"
                        ].map((img, k) => {
                            return <img key={k} src={img} />
                        })
                    }
                </div>

                <div className="pos-img-3 ">
                    <img className="padding-h space-v-min" src="/img/portafolio/e_compras/flujo.png" />
                    <img className="padding-h space-v-min" src="/img/portafolio/e_compras/colores.png" />
                    <img className="space-v-min" src="/img/portafolio/e_compras/pruebas_usuarios.png" />
                    <img className="padding-h space-v-min" style={{ width: "80%" }} src="/img/portafolio/e_compras/mockup_1.png" />
                    <p className="max-width parrafo7 padding-h">With the new E-compras the applicant has new functions that adapt to his needs: help information when creating a new application, saving frequent requests in Favorites and Home with a clear and orderly inbox.</p>
                    <div className="padding-h">
                        <img src="/img/portafolio/e_compras/mockup_2.png" />

                    </div>
                </div>



                <div className="pos-img-2 space-v-min">
                    <img src="/img/portafolio/e_compras/end.png"  />
                </div>
               
            </div>


            <ScrollModule />

            <FooterNavegacion />
        </div>


    </div>
}

export default ECompras;