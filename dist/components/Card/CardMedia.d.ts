import { default as React } from 'react';
export type CardMediaProps = {
    component?: 'img' | 'picto';
    src?: string;
    picto?: string;
};
declare const CardMedia: ({ component, src, picto, }: CardMediaProps) => React.JSX.Element;
export default CardMedia;
