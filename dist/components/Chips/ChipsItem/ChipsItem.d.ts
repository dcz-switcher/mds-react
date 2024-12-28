import { default as React } from 'react';
export type ChipsItemProps = {
    label?: string;
    active?: boolean;
    onClick?: any;
    className?: string;
};
export default function ChipsItem({ label, active, onClick, className, }: ChipsItemProps): React.JSX.Element;
