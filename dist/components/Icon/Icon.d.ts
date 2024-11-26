import { default as React, ReactNode } from 'react';
export type IconProps = {
    children?: ReactNode;
    color?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
    baseClassName?: string;
};
declare const Icon: ({ children, color, size, baseClassName }: IconProps) => React.JSX.Element;
export default Icon;
