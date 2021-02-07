import React, { useEffect, useRef, useState } from 'react';
import "./index.scss";

const ScrollModule = ({ refScroll, height = 40 }: { height?: number, refScroll?: HTMLElement }) => {

    const refContainer = useRef<any>()
    const refAnim = useRef<any>();

    const [hide, setHide] = useState(false)

    useEffect(() => {
        const refContainerHTML = refContainer.current as HTMLDivElement;
        if (refScroll) {
            refContainerHTML.style.height = height + "px";
            let animEle = refContainerHTML.querySelector(".ScrollModule__scroll") as HTMLDivElement;
            animEle.style.height = (refScroll.scrollWidth - refScroll.clientWidth + height) + "px";

            refContainerHTML.addEventListener("scroll", (e) => {
                animEle.style.height = (refScroll.scrollWidth - refScroll.clientWidth + height) + "px";
                refScroll.scrollLeft = refContainerHTML.scrollTop;
            })
        }
    }, [refScroll])

    useEffect(() => {
        const refContainerHTML = refContainer.current as HTMLDivElement;
        const refContainerHTMLParent = refContainerHTML.parentNode;

        const scrollEvent = (e: any) => {
            console.log(e.target.scrollTop, e.target.clientHeight * .4)
            if (e.target.scrollTop >= e.target.clientHeight * .4) {
                setHide(true)
            } else {
                setHide(false)
            }
        }

        if (refContainerHTMLParent) {
            refContainerHTMLParent.addEventListener("scroll", scrollEvent)
        }

        const refAnimHTML = refAnim.current as HTMLDivElement;
        refAnimHTML.style.height = height + "px";
        

        return () => {
            if (refContainerHTMLParent) {
                refContainerHTML.removeEventListener("scroll", scrollEvent);
            }
        }

    }, [])


    return <>
        <div ref={refAnim} className={"ScrollModule__anim" + (hide ? " hidden" : "")}></div>
        <div ref={refContainer} className={"ScrollModule" + (hide ? " hidden" : "")}>
            <div className="ScrollModule__scroll"></div>
        </div>
        <p className={"ScrollModule__texto" + (hide ? " hidden" : "")}>Scroll</p></>
}

export default ScrollModule;