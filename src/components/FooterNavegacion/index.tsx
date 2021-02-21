import React, { useEffect, useState } from "react";
import "./index.scss";
import { PortafolioPages } from '../../pages/Portafolio/index';
import AppContext from '../App/context/AppContext';
import Rlink from '../../constants/Routes/Rlink';
import { PreloadProps } from '../App/context/AppContext';
import Footer from '../Footer/index';

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

    return <><div className="FooterNavegacion">
        {paginas.map((t, i) => {
            return <ItemNav key={i} t={t} i={i} />


        })}


    </div>
        <Footer position="normal" />
    </>
}

export default FooterNavegacion;

const ItemNav = ({ t, i }: {
    t: {
        img: string;
        link: string;
    },
    i: number
}) => {
    const { useStyle, usePageLink, usePreload } = AppContext.Consumer();
    const [, setPageLink] = usePageLink();
    const [style, setStyle] = useStyle();
    const [changeAnim, setChangeAnim] = useState<boolean | undefined>(undefined);
    const [hover, setHover] = useState(false);

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
            setPageLink(t.link)
        }
    }, [preload])

    useEffect(() => {
        setChangeAnim(false);
    }, [])

    return <div key={i}
        className="FooterNavegacion__item"
        style={{ backgroundImage: `url('${t.img}')` }}
        onClick={onClick}>
    </div>

}