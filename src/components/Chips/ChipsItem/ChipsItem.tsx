import React from "react";


export type ChipsItemProps = {
    label?: string;
    active?: boolean;
    onClick?: any;
    className?: string;
}

export default function ChipsItem({
    label,
    active = false,
    onClick,
    className = '',
}:ChipsItemProps) {
    return (
        <li className={className}>
            <button onClick={onClick} type="button" className="mds-chips__item" aria-pressed={`${active}`} aria-disabled={`${active}`}>{label}</button>
        </li>
    )
}