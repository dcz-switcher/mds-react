import React from "react";
import { Box } from "../Box";


export type PushoutProps = {
    title?: any,
    desc?: any,
    action?: any,
    flip?: boolean,
    className?: string,
    image?: string,
}


const Pushout = ({
    title = null,
    desc = null,
    action = null,
    flip = false,
    className = '',
    image = '',
    ...props
}:PushoutProps) => {

    /*
    const markdownRender = (s:any) => {
        const regexSquared = /\[\[(.*)\]\]/gim;
        const regexUnderline = /\_\_(.*)\_\_/gim;
        let output = s.replace(regexSquared, `<span class="mds-squared">$1</span>`).replace(regexUnderline, `<span class="mds-inderline">$1</span>`)
        console.log("-")
        console.log(output)
        console.log("--")


        return output;
    }
        */

    const customStyle = flip ? {flexDirection: 'row-reverse'} : null;

    return (
        <div className="mds-push__container" {...props}>
            <div className={`mds-push ${className}`} style={customStyle as React.CSSProperties}>
                <div className="mds-push__body">
                    {title ? 
                        <Box className="mds-stack-b--16">{title}</Box>
                    : ''}
                    
                    {desc ? 
                        <Box className="mds-stack-b--32">{desc}</Box>
                    : ''}
                    
                    {action}
                </div>
                { image ?
                    <div className="mds-push__img">
                        <img src={image} alt=""/>
                    </div>
                :''}
            </div>
        </div>
    )
}

export default Pushout;