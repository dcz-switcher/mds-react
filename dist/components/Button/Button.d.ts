import { default as React, MouseEventHandler } from 'react';
export type ButtonProps = {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
