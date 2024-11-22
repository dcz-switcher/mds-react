import React, { ReactNode } from "react"

type ChipsListProps = {
    children?: ReactNode;
    reverse?: boolean;
    size?: "small" | "big";
}


export default function ChipsList ({
    children,
    reverse = false,
    size = "big"
}:ChipsListProps) {
    
    return (
        <div className={`mds-chips ${size == 'small' ? "mds-chips--small" : ""} ${reverse == true ? "mds-chips--reverse" : ""}`}>
            <ul className="mds-chips__list">
                {children}
            </ul>
        </div>
    )
}