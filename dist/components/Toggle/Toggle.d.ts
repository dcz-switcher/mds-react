import { default as React } from 'react';
export interface ToggleProps {
    id?: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: any;
    reverse?: boolean;
}
declare const Toggle: ({ id, label, checked, disabled, onChange, reverse }: ToggleProps) => React.JSX.Element;
export default Toggle;
