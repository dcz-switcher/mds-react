import React, { ReactNode } from "react"

type ChipsListProps = {
    children?: ReactNode;
    reverse?: boolean;
}


export default function ChipsList ({
    children,
    reverse = false
}:ChipsListProps) {
    return (
        <div className={`mds-chips ${reverse == true ? "mds-chips--reverse" : ""}`}>
            <ul className="mds-chips__list">
                {children}
            </ul>
        </div>
    )
}