import React, { createRef, useEffect } from 'react';
import "./index.scss";

const Cursor = () => {

    const refCursor = createRef<any>();

    useEffect(() => {
        let cursorHTML = refCursor.current as HTMLDivElement;
        let counter = 0;
        document.addEventListener("mousemove", (e) => {
            var x = e.clientX;
            var y = e.clientY;
            counter++;

            if (cursorHTML && counter % 5 === 0) {
                cursorHTML.style.top = y + "px";
                cursorHTML.style.left = x + "px";
            }
        })
    }, [])
    return <div ref={refCursor} className="Cursor"></div>
}

export default Cursor;