import React from "react";


export type ChipsItemProps = {
    readonly label? : string;
}

export default function ChipsItem({
    label,
}) {
    return (
        <li>
            <button type="button" className="mds-chips__item" aria-pressed="false" aria-disabled="false">{label}</button>
        </li>
    )
}