import { default as React, ReactNode } from 'react';
export type SelectItemProps = {
    children?: ReactNode;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
};
declare const SelectItem: ({ children, disabled, selected, hidden, value, }: SelectItemProps) => React.JSX.Element;
export default SelectItem;
