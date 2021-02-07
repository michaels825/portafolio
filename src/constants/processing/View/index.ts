import { ProcessingMain } from '../Config/index';

export class ViewProcessing {

    pantalla: ProcessingMain;
    exeInit = {
        preload: false,
        setup: false
    }
    elementsHTML: HTMLElement[]

    constructor(pantalla: ProcessingMain) {
        this.pantalla = pantalla;
        this.elementsHTML = [];
    }

    addElemento(elemento: HTMLElement) {
        this.elementsHTML.push(elemento);
    }


}

export default ViewProcessing; 