import React, { ReactNode } from "react";

export type SelectItemProps = {
    children?: ReactNode;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
};

const SelectItem = ({
    children,
    disabled,
    selected,
    hidden,
    value,
}:SelectItemProps) => {
    return (
        <option value={value} disabled={disabled} selected={selected} hidden={hidden}>{children}</option>
    )
};

export default SelectItem;