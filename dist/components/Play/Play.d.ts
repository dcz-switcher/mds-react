import { default as React, ReactNode } from 'react';
type PlayProps = {
    children?: ReactNode;
};
export declare const usePlayAncestry: () => boolean;
declare const Play: ({ children }: PlayProps) => React.JSX.Element;
export default Play;
