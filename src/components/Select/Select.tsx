import React, { ReactNode } from "react";
import SelectItem from "./SelectItem";

export type SelectProps = {
    children?: ReactNode;
    label?: string;
    subLabel?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    requiredLabel?: string;
};

const Select  = ({
    children,
    label,
    subLabel,
    name,
    placeholder = "Sélectionner...",
    required = true,
    requiredLabel = "(facultatif)",
}:SelectProps) => {
    const SelectId = React.useId();
    const requiredNode = (required) ? "" : <span className="mds-label--optional">{requiredLabel}</span> ;

    return (
        <div className="mds-select-dropdown">
            <label className="mds-label" htmlFor={SelectId}>{label}{requiredNode}<span className="mds-label--description">{subLabel}</span></label>
            <div className="mds-select__item mds-input-cell">
                <span className="mds-icon__expand-more" aria-hidden="true"></span>
                <select name={name} id={SelectId} required={required}>
                    {placeholder ?
                        <SelectItem disabled={true} selected={true} hidden={true}>{placeholder}</SelectItem>
                    : ""}

                    {children}

                </select>
            </div>
            
        </div>
    )
};

export default Select;