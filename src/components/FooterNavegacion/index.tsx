import React, { useEffect, useState } from "react";
import "./index.scss";
import { PortafolioPages } from '../../pages/Portafolio/index';
import AppContext from '../App/context/AppContext';
import Rlink from '../../constants/Routes/Rlink';

const FooterNavegacion = () => {

    const { usePageLink, useStyle } = AppContext.Consumer();
    const [pageLink, setPageLink] = usePageLink();

    const [paginas, setPaginas] = useState([{
        img: "/img/portafolio/preview_2/yuaatsapiyaa.png",
        link: PortafolioPages.yu_a_atsa_piya_a
    },
    {
        img: "/img/portafolio/preview_2/anonimo.png",
        link: PortafolioPages.anonimo
    },
    {
        img: "/img/portafolio/preview_2/ecompras.png",
        link: PortafolioPages.e_compras
    },
    {
        img: "/img/portafolio/preview_2/pizza.png",
        link: PortafolioPages.the_pizza_project
    },
    {
        img: "/img/portafolio/preview_2/califest.png",
        link: PortafolioPages.califest
    }]);

    useEffect(() => {

        let tempPaginas = Object.assign([], paginas) as { img: string, link: string }[];
        const pathName = window.location.pathname;

        console.log(window.location, pathName)

        for (let i = 0; i < tempPaginas.length; i++) {
            let pag = tempPaginas[i];
            if (pag.link.indexOf(pathName) !== -1) {
                let index = i;
                i = tempPaginas.length;
                tempPaginas.splice(index, 1)
            }
        }

        setPaginas(tempPaginas)

    }, [])

    return <div className="FooterNavegacion">
        {paginas.map((t, i) => {
            return <div key={i}
                className="FooterNavegacion__item"
                style={{ backgroundImage: `url('${t.img}')` }}
                onClick={() => {
                    setPageLink(t.link)
                }}>
                {/** */}
            </div>
        })}


    </div>
}

export default FooterNavegacion;