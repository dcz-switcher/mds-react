import { default as React } from 'react';
export type CardMediaProps = {
    component?: 'img' | 'icon' | 'picto';
    src?: string;
    icon?: string;
};
declare const CardMedia: ({ component, src, icon, }: CardMediaProps) => React.JSX.Element;
export default CardMedia;
