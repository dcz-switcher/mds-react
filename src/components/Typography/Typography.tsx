import React, { ReactNode } from "react"



export type typographyProps = {
    readonly children?: ReactNode;
    readonly variant? : "body1" | "body2" | "body3" | "body4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;
    readonly align?: "center" | "inherit" | "justify" | "left" | "right";
}


export default function Typography({
    children, 
    variant = "body1",
    align = "left"
}:typographyProps) {

    const isTitle = variant.charAt(0).toLowerCase() == "h";
    const Tag = `h${variant.charAt(1)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return (
        <>
            { isTitle  ? (
                <Tag style={{textAlign: align}}>
                    {children}
                </Tag>
            ) : (
                <p className={`mds-text--${variant.charAt(4)}`} style={{textAlign: align}}>
                    {children}
                </p>
            )}
        </>
    )
}