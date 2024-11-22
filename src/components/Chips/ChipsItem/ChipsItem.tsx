import React from "react";


export type ChipsItemProps = {
    label?: string;
    active?: boolean;
    onClick?: any
}

export default function ChipsItem({
    label,
    active = false,
    onClick
}:ChipsItemProps) {
    return (
        <li>
            <button onClick={onClick} type="button" className="mds-chips__item" aria-pressed={`${active}`} aria-disabled={`${active}`}>{label}</button>
        </li>
    )
}