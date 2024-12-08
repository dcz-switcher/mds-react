import React, { ReactNode, useRef, useEffect } from "react";

export type AccordionItemProps = {
    title?: string;
    children?: ReactNode;
    expanded?: boolean;
    expandIcon?: string; //don't usable currently because icon is also injected by CSS. Bug declared on dec. 8th.
}

const AccordionItem = ({
    title = "Item title",
    children,
    expanded = false,
    expandIcon = 'expand-more'
}:AccordionItemProps) => {
    const [maxH, setMaxH] = React.useState(0);

    const ref = useRef(null) as any;

    const getContentHeight = () => {
        if (ref && ref.current) {
            return ref.current.querySelector('.mds-accordion__body').offsetHeight;
        } else {
            return 0
        }
    }

    useEffect(() => {
        if (expanded) {
            setMaxH(getContentHeight());
        } else {
            setMaxH(0);
        }

        return () => {}
    }, [expanded]);

    return (
        <div ref={ref} className="mds-accordion__item">
            <h2 className="mds-accordion__header">
                <button type="button" aria-controls="collapse--xx" className={`mds-collapse mds-collapse__label ${expanded ? 'active' : ''}`} aria-expanded={expanded}>
                    {title}
                    <span className={`mds-icon__${expandIcon}`} aria-hidden="true"></span>
                </button>
            </h2>
            <div id="collapse--xx" className={`mds-collapse__content ${expanded ? 'active' : ''}`} style={{'maxHeight': maxH}}>
                <div className="mds-accordion__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;