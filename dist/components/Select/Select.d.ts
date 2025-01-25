import { default as React, ReactNode } from 'react';
export type SelectProps = {
    children?: ReactNode;
    label?: string;
    subLabel?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    requiredLabel?: string;
};
declare const Select: ({ children, label, subLabel, name, placeholder, required, requiredLabel, }: SelectProps) => React.JSX.Element;
export default Select;
