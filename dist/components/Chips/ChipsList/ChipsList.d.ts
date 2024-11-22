import { default as React, ReactNode } from 'react';
type ChipsListProps = {
    children?: ReactNode;
    reverse?: boolean;
    size?: "small" | "big";
};
export default function ChipsList({ children, reverse, size }: ChipsListProps): React.JSX.Element;
export {};
