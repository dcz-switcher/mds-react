import { default as React, ReactNode } from 'react';
export type ShowMoreProps = {
    children?: ReactNode;
    labelClosed?: string;
    labelOpened?: string;
};
declare const ShowMore: ({ children, labelClosed, labelOpened, }: ShowMoreProps) => React.JSX.Element;
export default ShowMore;
