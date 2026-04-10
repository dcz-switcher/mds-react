import { default as React } from 'react';
export interface MdsRatingProps {
    max?: number;
    initialValue?: number;
    onChange?: (value: number) => void;
    label?: string;
}
declare const MdsRating: React.FC<MdsRatingProps>;
export default MdsRating;
