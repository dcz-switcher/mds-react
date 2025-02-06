import { default as React } from 'react';
export type LoaderProps = {
    title?: string;
    reverse?: boolean;
};
declare const Loader: ({ title, reverse }: LoaderProps) => React.JSX.Element;
export default Loader;
