import { default as React, ReactNode } from 'react';
export type ShowMoreProps = {
    children?: ReactNode;
    className?: string;
    labelClosed?: string;
    labelOpened?: string;
};
declare const ShowMore: ({ children, className, labelClosed, labelOpened, }: ShowMoreProps) => React.JSX.Element;
export default ShowMore;
