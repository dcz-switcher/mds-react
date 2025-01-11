import { default as React } from 'react';
export type QuoteProps = {
    autor?: string;
    avatar?: string;
    children?: string;
    className?: string;
    reverse?: boolean;
};
declare const Quote: ({ autor, avatar, children, className, reverse, }: QuoteProps) => React.JSX.Element;
export default Quote;
