import React, {ReactNode} from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;   
}

const Box = ({
    children,
    className = '',
    ...props
}:BoxProps) => {
    return (
        <div className={className} {...props} >
            {children}
        </div>
    )
}

export default Box;