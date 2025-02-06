import React from "react";


export type LoaderProps = {
    title?: string;
    reverse?:boolean;
};

const Loader = ({
    title,
    reverse = false
}:LoaderProps) => {
    const layoutClass = (reverse) ? 'mds-loader__layout mds-loader__layout--reverse' : 'mds-loader__layout';
    const loaderClass = (reverse) ? 'mds-loader mds-loader--reverse' : 'mds-loader';

    return (
        <div className={layoutClass}>
            <div className={loaderClass}>
                <span className="mds-sr-only">{title}</span>
            </div>
        </div>
    )
};

export default Loader;