import p5 from 'p5';

import ViewProcessing from '../View/index';

import "./index.scss";

export interface ProcessingMain {
    preload?: () => void;
    setup?: () => void;
    draw?: () => void;

    mouseClicked?: () => void;
    mousePressed?: () => void;
    mouseReleased?: () => void;
    mouseDragged?: () => void;
    keyPressed?: () => void;
    keyReleased?: () => void;
} 

export default class Processing {

    app: p5;
    canvas?: p5.Renderer;
    main?: ProcessingMain;
    container: HTMLDivElement;

    pantalla?: ViewProcessing;

    isDestruido = false;

    sizeInit = {
        width: 1280,
        height: 720
    }

    exeInit = {
        preload: false,
        setup: false
    }

    constructor() {
        this.app = new p5(() => { });
        this.container = document.createElement("div");
        this.container.classList.add("Processing");
    }

    initProcessing() {

        console.log("Processing inicializado")

        this.app.draw = () => {
            if (this.isDestruido === false) {
                this.onDraw();
            }
        }

        this.app.mouseClicked = () => {
            if (this.isDestruido === false) {
                this.onMouseClicked();
            }
        }

        this.app.mousePressed = () => {
            if (this.isDestruido === false) {
                this.onMousePressed();
            }
        }

        this.app.mouseReleased = () => {
            if (this.isDestruido === false) {
                this.onMouseReleased();
            }
        }

        this.app.mouseDragged = () => {
            if (this.isDestruido === false) {
                this.onMouseDragged();
            }
        }

        this.app.keyPressed = () => {
            if (this.isDestruido === false) {
                this.onKeyPressed();
            }
        }

        this.app.keyReleased = () => {
            if (this.isDestruido === false) {
                this.onKeyReleased();
            }
        }


        return this.app;
    }

    size(width: number, height: number) {
        this.sizeInit = {
            width, height
        }
    }

    setMain(main: ProcessingMain) {
        this.main = main;
    }

    onPreload() {
        if (this.main && this.main.preload) {
            this.main.preload();
        }
    }

    onSetup() {
        if (this.app) {
            this.canvas = this.app.createCanvas(this.sizeInit.width, this.sizeInit.height);
        }

        if (this.canvas) {
            this.canvas.parent(this.container);

            this.canvas.style("visibility", "visible");
            this.canvas.attribute("data-hidden", "false");
            this.canvas.show();
        }

        if (this.main && this.main.setup) {
            this.main.setup();
        }
    }

    onDraw() {

        if (!this.exeInit.preload) {
            this.exeInit.preload = true;
            this.onPreload();
        }

        if (!this.exeInit.setup) {
            this.exeInit.setup = true;
            this.onSetup();
        }

        if (this.main && this.main.draw) {
            this.main.draw();
        }

        if (this.pantalla) {

            if (!this.pantalla.exeInit.preload) {
                this.pantalla.exeInit.preload = true;
                if (this.pantalla.pantalla.preload) {
                    this.pantalla.pantalla.preload();
                }
            }

            if (!this.pantalla.exeInit.setup) {
                this.pantalla.exeInit.setup = true;
                if (this.pantalla.pantalla.setup) {
                    this.pantalla.pantalla.setup();
                }
            }

            if (this.pantalla.pantalla.draw) {
                this.pantalla.pantalla.draw();
            }

        }
    }

    onMouseClicked() {
        if (this.main && this.main.mouseClicked) {
            this.main.mouseClicked();
        }
        if (this.pantalla && this.pantalla.pantalla.mouseClicked) {
            this.pantalla.pantalla.mouseClicked();
        }
    }

    onMousePressed() {
        if (this.main && this.main.mousePressed) {
            this.main.mousePressed();
        }
        if (this.pantalla && this.pantalla.pantalla.mousePressed) {
            this.pantalla.pantalla.mousePressed();
        }
    }

    onMouseReleased() {
        if (this.main && this.main.mouseReleased) {
            this.main.mouseReleased();
        }
        if (this.pantalla && this.pantalla.pantalla.mouseReleased) {
            this.pantalla.pantalla.mouseReleased();
        }
    }

    onMouseDragged() {
        if (this.main && this.main.mouseDragged) {
            this.main.mouseDragged();
        }
        if (this.pantalla && this.pantalla.pantalla.mouseDragged) {
            this.pantalla.pantalla.mouseDragged();
        }
    }

    onKeyPressed() {
        if (this.main && this.main.keyPressed) {
            this.main.keyPressed();
        }
        if (this.pantalla && this.pantalla.pantalla.keyPressed) {
            this.pantalla.pantalla.keyPressed();
        }
    }

    onKeyReleased() {
        if (this.main && this.main.keyReleased) {
            this.main.keyReleased();
        }
        if (this.pantalla && this.pantalla.pantalla.keyReleased) {
            this.pantalla.pantalla.keyReleased();
        }
    }

    setPantalla(pantalla?: ViewProcessing) {

        if (this.pantalla) {
            this.pantalla.elementsHTML.forEach((e: HTMLElement) => {
                if (e.parentNode === this.container) {
                    this.container.removeChild(e);
                }
            })
        }

        this.pantalla = pantalla;

        if (this.pantalla) {
            this.pantalla.elementsHTML.forEach((e: HTMLElement) => {
                this.container.append(e);
            })
        }
    }

    getContainer() {
        return this.container;
    }

    getApp() {
        return this.app;
    }

    destroy() {
        this.app.noLoop();
        this.app.removeElements();
        this.app.noCanvas();
        this.isDestruido = true;
    }

}

 





