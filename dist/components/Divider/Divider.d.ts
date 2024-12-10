import { default as React, HTMLAttributes } from 'react';
export interface DividerProps extends HTMLAttributes<HTMLElement> {
    component?: 'hr' | 'div';
    variant?: 'thin' | 'heavy';
    reverse?: boolean;
}
declare const Divider: ({ component, variant, reverse, ...props }: DividerProps) => React.JSX.Element;
export default Divider;
