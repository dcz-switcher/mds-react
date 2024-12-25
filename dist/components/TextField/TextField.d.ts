import { default as React, ComponentProps, ReactNode } from 'react';
export interface TextFieldProps extends ComponentProps<'input'> {
    endAdornment?: ReactNode;
    error?: boolean;
    errorText?: string;
    fullWidth?: boolean;
    id?: string;
    label?: string;
    optionalText?: string;
    required?: boolean;
    reverse?: boolean;
    supportingText?: string;
    startIcon?: string;
    type?: 'number' | 'text' | 'tel' | 'email' | 'password' | any;
}
declare const TextField: ({ endAdornment, error, errorText, fullWidth, id, label, optionalText, required, reverse, supportingText, startIcon, type, ...props }: TextFieldProps) => React.JSX.Element;
export default TextField;
