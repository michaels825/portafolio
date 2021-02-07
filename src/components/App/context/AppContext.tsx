import React, { Props, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import createContext from '../../../components/Context/Context';

export interface ICodeLine {
    text: string;
}

interface IStyle {
    header: "deafult" | "over";
    body: "max-width" | "default" | "width-large";
    footer: "hiden" | "default",
    animSlider: "vertical" | "horizontal" | "vertical-inverse"
}

type IUseStyle = [IStyle,
    React.Dispatch<React.SetStateAction<IStyle>>
]

type IUsePageLink = [string,
    React.Dispatch<React.SetStateAction<string>>
]



export interface PreloadProps {
    active: boolean,
    pageLink: boolean,
    state: boolean,
    color: number
}

type IUsePreload = [PreloadProps,
    React.Dispatch<React.SetStateAction<PreloadProps>>
]

interface IPropsContext {
    usePageLink: () => IUsePageLink;
    useStyle: () => IUseStyle;
    usePreload: () => IUsePreload;
}

const AppContext = createContext<IPropsContext>();

export const AppContextProvider = (props: Props<any>) => {

    const history = useHistory();

    const [pageLink, setPageLink] = useState<string>(window.location.pathname)
    const [style, setStyle] = useState<IStyle>({
        header: "deafult",
        body: "default",
        footer: "hiden",
        animSlider: "horizontal"
    })

    const [preload, setPreload] = useState<PreloadProps>({
        active: false,
        pageLink: false,
        state: true,
        color: 2
    });

    useEffect(() => {
        if (window.location.pathname !== pageLink) {
            let color = preload.color;
            let preloadTemp = Object.assign({}, preload) as PreloadProps;
            preloadTemp.pageLink = true;
            if (preloadTemp.active === true) {
                if (preloadTemp.color + 1 >= 3) {
                    preloadTemp.color = 0;
                } else {
                    preloadTemp.color++;
                }

                preloadTemp.state = true;
            }
            setPreload(preloadTemp);




        }
    }, [pageLink])

    useEffect(() => {
        if (preload.pageLink === true && preload.active === false) {

            let preloadTemp = Object.assign({}, preload) as PreloadProps;
            preloadTemp.pageLink = false;
            setPreload(preloadTemp);

            history.push(pageLink)

        }
    }, [preload])


    const value = useMemo(() => {
        let usePageLink: () => IUsePageLink = () => { return [pageLink, setPageLink] }
        let useStyle: () => IUseStyle = () => { return [style, setStyle] }
        let usePreload: () => IUsePreload = () => { return [preload, setPreload] }

        var state = {
            usePageLink,
            useStyle,
            usePreload
        }

        return state;
    }, [pageLink, style, preload]);

    return <AppContext.Provider value={value} {...props} />
}

export default AppContext;