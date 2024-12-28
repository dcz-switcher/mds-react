import { default as React } from 'react';
export type ToggleProps = {
    id?: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: any;
    reverse?: boolean;
    className?: string;
};
declare const Toggle: ({ id, label, checked, disabled, onChange, reverse, className, }: ToggleProps) => React.JSX.Element;
export default Toggle;
