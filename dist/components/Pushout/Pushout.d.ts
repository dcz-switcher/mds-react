import { default as React } from 'react';
export type PushoutProps = {
    title?: any;
    desc?: any;
    action?: any;
    flip?: boolean;
    className?: string;
    image?: string;
};
declare const Pushout: ({ title, desc, action, flip, className, image, ...props }: PushoutProps) => React.JSX.Element;
export default Pushout;
