import "./index.scss";

class AECAnimation {

    private scrollE?: HTMLElement;
    private elementos: HTMLElement[] = [];
    private listAnimation = ["fade-in", "fade-up", "fade-down", "fade-left", "fade-right"];

    constructor(scrollE?: HTMLElement, elementos?: HTMLElement[]) {
        if (scrollE !== undefined) {
            this.scrollE = scrollE;
        }

        if (elementos !== undefined) {
            this.elementos = elementos;
        }

        if (this.scrollE !== undefined) {
            this.init();
        }

    }

    findClass() {
        let scrollE = document.querySelector(".aec-scroll") as HTMLElement;
        if (scrollE !== undefined) {
            this.scrollE = scrollE;
        }

        (document.querySelectorAll(".aec-e") as NodeListOf<HTMLElement>).forEach(e => this.elementos.push(e));

        if (this.scrollE !== undefined) {
            this.init();
        }
    }

    private init() {
        if (this.scrollE) {
            this.scrollEvent();
            this.scrollE.addEventListener("scroll", this.scrollEvent.bind(this))
        }
    }

    private scrollEvent(ev?: any) {

        if (this.scrollE) {
            let pantallaHeight = this.scrollE.clientHeight;
            let totalScroll = this.scrollE.scrollHeight - this.scrollE.clientHeight;
            let currentScrollTop = this.scrollE.scrollTop;

            this.elementos.forEach(e => {

                if (currentScrollTop > (e.offsetTop - pantallaHeight)) {
                    //Elemento visible en entrada
                }

                if (currentScrollTop > (e.offsetTop + e.clientHeight)) {
                    //Salida desde abajo
                }

                if (currentScrollTop < (e.offsetTop - pantallaHeight)) {
                    this.listAnimation.forEach(animN => {
                        if (e.className.includes("aec-" + animN)) {
                            e.classList.remove("aec-" + animN + "-into-view");
                        }
                    })
                }

                if (currentScrollTop > (e.offsetTop - (pantallaHeight)) && currentScrollTop < (e.offsetTop + e.clientHeight)) {
                    //Elemento visible en entrada
                    this.listAnimation.forEach(animN => {
                        if (e.className.includes("aec-" + animN)) {
                            e.classList.add("aec-" + animN + "-into-view");
                        }
                    })


                    if (e.className.includes("aec-color-white")) {
                        var header = document.querySelector(".Header");
                        if (header) {
                            header.classList.add("Header__white");
                        }
                    } else if (e.className.includes("aec-color-normal")) {
                        var header = document.querySelector(".Header");
                        if (header) {
                            header.classList.remove("Header__white");
                        }
                    }

                }
            })
        }
    }

    destroy() {
        if (this.scrollE !== undefined && this.scrollE !== null) {
            this.scrollE.removeEventListener("scroll", this.scrollEvent.bind(this));
        }
    }

}

export default AECAnimation;
