import React from "react";

export interface ProgressLinearProps extends React.HTMLAttributes<HTMLProgressElement> {
    className?: string;
    max?: number;
    value?: number;
};

const ProgressLinear = ({
    className,
    max = 100,
    value,
    ...props
}:ProgressLinearProps) => {
    return (
        <progress className={`mds-progress-bar ${className}`} aria-hidden="true" value={value} max={max} {...props}>{value}</progress>
    )
};

export default ProgressLinear;