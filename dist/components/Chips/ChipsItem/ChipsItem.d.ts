import { default as React } from 'react';
export type ChipsItemProps = {
    label?: string;
    active?: boolean;
    onClick?: any;
};
export default function ChipsItem({ label, active, onClick }: ChipsItemProps): React.JSX.Element;
