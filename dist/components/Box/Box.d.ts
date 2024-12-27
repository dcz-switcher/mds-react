import { default as React, ReactNode } from 'react';
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}
declare const Box: ({ children, className, ...props }: BoxProps) => React.JSX.Element;
export default Box;
