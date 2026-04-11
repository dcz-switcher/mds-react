import { default as React } from 'react';
type CopyFieldType = "iban" | "email" | "phone";
interface CopyFieldProps {
    value: string;
    type?: CopyFieldType;
    label?: string;
    feedbackMessage?: string;
    onCopy?: (value: string) => void;
    className?: string;
}
export default function CopyField({ value, type, label, feedbackMessage, onCopy, className, }: CopyFieldProps): React.JSX.Element;
export {};
