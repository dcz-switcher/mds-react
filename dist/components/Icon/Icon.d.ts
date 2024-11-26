import { default as React, ReactNode } from 'react';
export type IconProps = {
    children?: ReactNode;
    color?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge' | 'enormous' | 'giant';
    baseClassName?: string;
};
declare const Icon: ({ children, color, size, baseClassName }: IconProps) => React.JSX.Element;
export default Icon;
