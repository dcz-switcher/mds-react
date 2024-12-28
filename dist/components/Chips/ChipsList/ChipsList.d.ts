import { default as React, ReactNode } from 'react';
type ChipsListProps = {
    children?: ReactNode;
    reverse?: boolean;
    size?: "small" | "big";
    className?: string;
};
export default function ChipsList({ children, reverse, size, className, }: ChipsListProps): React.JSX.Element;
export {};
