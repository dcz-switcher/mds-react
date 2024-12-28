import React from "react";

export type ToggleProps = {
    id?: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: any;
    reverse?: boolean;
    className?: string;
}

const Toggle = ({
    id,
    label,
    checked = false,
    disabled = false,
    onChange,
    reverse = false,
    className,
}:ToggleProps) => {

    const ToggleId = (id) ? id : React.useId();

    return (
        <div className={`mds-toggle ${reverse ? 'mds-toggle--reverse' : ''} ${className}`}>
            <input type="checkbox" onChange={onChange} role="switch" id={ToggleId} checked={checked} disabled={disabled} aria-disabled={disabled} />
            <label htmlFor={ToggleId}><span className="mds-sr-only">{label}</span></label>
        </div>
    )
}

export default Toggle;