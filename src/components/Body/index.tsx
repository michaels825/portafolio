import React, { Children, ReactChild, useEffect } from "react";
import "./index.scss";
import { Route, Switch, useHistory, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Rlink from '../../constants/Routes/Rlink';
import Principal from "../../pages/Principal";
import About from '../../pages/About/index';
import Portafolio from '../../pages/Portafolio/index';
import Contact from '../../pages/Contact/index';
import AppContext from '../App/context/AppContext';
import { PortafolioPages } from '../../pages/Portafolio/index';
import AA from '../../pages/Portafolio/proyectos/AA/index';
import Anonimo from '../../pages/Portafolio/proyectos/Anonimo/index';
import Califest from '../../pages/Portafolio/proyectos/Califest/index';
import ECompras from '../../pages/Portafolio/proyectos/ECompras/index';
import ThePizzaProject from '../../pages/Portafolio/proyectos/ThePizzaProject/index';
import YuAAtsaPiyaA from '../../pages/Portafolio/proyectos/YuAAtsaPiyaA/index';





const Body = withRouter(({ location }) => {



    const { useStyle, usePageLink } = AppContext.Consumer();
    const [style] = useStyle();
    const [pageLink] = usePageLink();

    useEffect(()=>{
  
    }, [])

    useEffect(() => {
       // AOS.refresh();
    }, [pageLink])

    return (
        <div className={"Body" + (style.header === "over" ? " Header__over" : "") + (style.body === "max-width" ? " Body__max" : style.body === "width-large" ? " Body__large" : "")}>
            <TransitionGroup className="Body__container">
                <CSSTransition key={location.key} classNames={style.animSlider === "horizontal" ? "slide" : style.animSlider === "vertical-inverse" ? "slideYI" : "slideY"} timeout={style.animSlider === "horizontal" ? 500 : 0}>
                    <Switch location={location}>
                        <Route exact path={Rlink.PRINCIPAL} component={Principal} />
                        <Route exact path={Rlink.ABOUT} component={About} />
                        <Route exact path={Rlink.PORTAFOLIO} component={Portafolio} />
                        <Route exact path={PortafolioPages.a_a} component={AA} />
                        <Route exact path={PortafolioPages.anonimo} component={Anonimo} />
                        <Route exact path={PortafolioPages.califest} component={Califest} />
                        <Route exact path={PortafolioPages.e_compras} component={ECompras} />
                        <Route exact path={PortafolioPages.the_pizza_project} component={ThePizzaProject} />
                        <Route exact path={PortafolioPages.yu_a_atsa_piya_a} component={YuAAtsaPiyaA} />

                        <Route exact path={Rlink.CONTANT} component={Contact} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup >

        </div >

    );
});


export default Body;