
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Rlink from '../../constants/Routes/Rlink';
import Principal from '../../pages/Principal';
import About from '../../pages/About/index';
import Contact from '../../pages/Contact/index';
import Portafolio from '../../pages/Portafolio/index';

import Header from '../Header';
import Body from '../Body';
import { AppContextProvider } from './context/AppContext';
import Processing from '../../constants/processing/Config/index';
import BackgroundMainProcessing from './styles/background';
import { useHistory } from 'react-router';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./index.scss";
import BackgroundCreateJs from './styles/backgroundCreatejs';
import Footer from '../Footer';
import AppContext from './context/AppContext';
import Preload from '../Preload';
import Cursor from '../Cursor';


const App = () => {
    return <BrowserRouter>
        <AppContextProvider>
            <Aplication />
        </AppContextProvider>
    </BrowserRouter>
}

export default App;


const Aplication = () => {

    const { usePreload } = AppContext.Consumer();
    const [preload, setPreload] = usePreload();

    const refContainer = useRef<any>();

    useEffect(() => {

        let refContainerHTML = refContainer.current as HTMLDivElement;

        let processing = new Processing();
        let app = processing.app;
        processing.size(200, 200)
        processing.setMain(BackgroundMainProcessing(app))
        refContainerHTML.append(processing.getContainer());

        processing.initProcessing();


      

    }, [])

    return <>
        <div className={"App" + (preload.state === true ? " App__hidden" : "")}>
            <div ref={refContainer} className="App__background"></div>
            <div className="App__background"></div>
            <Header />
            <Body />
            <Footer />
        </div>
        <Preload />
        <Cursor />
    </>
}