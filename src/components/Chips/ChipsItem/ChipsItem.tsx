import React from "react";


export type ChipsItemProps = {
    label?: string;
    active?: boolean;
}

export default function ChipsItem({
    label,
    active = false
}:ChipsItemProps) {
    return (
        <li>
            <button type="button" className="mds-chips__item" aria-pressed={`${active}`} aria-disabled={`${active}`}>{label}</button>
        </li>
    )
}