import { default as React } from 'react';
export interface ProgressLinearProps extends React.HTMLAttributes<HTMLProgressElement> {
    className?: string;
    max?: number;
    value?: number;
}
declare const ProgressLinear: ({ className, max, value, ...props }: ProgressLinearProps) => React.JSX.Element;
export default ProgressLinear;
