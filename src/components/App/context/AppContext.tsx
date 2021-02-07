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



interface PreloadProps {
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
        state: true,
        color: 0
    });

    useEffect(() => {
        if (window.location.pathname !== pageLink) {
            let color = preload.color;

            if (color + 1 >= 3) {
                color = 0;
            }

            color++;
            setPreload({ color, state: true })
            setTimeout(() => {
                history.push(pageLink)
            }, 1500)

        }
    }, [pageLink])


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