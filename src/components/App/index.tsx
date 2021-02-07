
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


        // refContainerHTML.appendChild(BackgroundCreateJs());

        let cursorHTML = document.querySelector(".Cursor") as HTMLDivElement;
        let cursoresHTML = document.querySelectorAll(".Cursor_item") as NodeListOf<HTMLDivElement>;
        let counter = 0;

        console.log(cursoresHTML)
        document.addEventListener("mousemove", (e) => {
            var x = e.clientX;
            var y = e.clientY;
            counter++;

            if (cursorHTML && counter % 3 === 0) {
                cursorHTML.style.top = y + "px";
                cursorHTML.style.left = x + "px";
            }

            /*
            cursoresHTML.forEach((c, i) => {
                if (counter % i === 0) {
                    c.style.top = (y + i * 10) + "px";
                    c.style.left = (x + i * 10) + "px";
                } else {
                    c.style.top = (y + i) + "px";
                    c.style.left = (x + i) + "px";
                }
            })
            */
        })


    }, [])

    return <>
     
        <div className={"App" + (preload.state === true ? " App__hidden" : "")}>
            <div ref={refContainer} className="App__background"></div>
            <div className="App__background"></div>
            <Header />
            <Body />
            <Footer />
            <div className="Cursor">
            </div>
        </div>
        <Preload />
    </>
}