import React from "react";


export type ChipsItemProps = {
    label?: string;
}

export default function ChipsItem({
    label
}:ChipsItemProps) {
    return (
        <li>
            <button type="button" className="mds-chips__item" aria-pressed="false" aria-disabled="false">{label}</button>
        </li>
    )
}