import React, { ReactNode, useRef, useEffect } from "react";

export type AccordionItemProps = {
    title?: string;
    children?: ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    expandIcon?: string; //don't usable currently because icon is also injected by CSS. Bug declared on dec. 8th.
}

const AccordionItem = ({
    title = "Item title",
    children,
    defaultExpanded = false,
    expanded = defaultExpanded,
    expandIcon = 'expand-more'
}:AccordionItemProps) => {
    const [maxH, setMaxH] = React.useState(0);
    
    const [isExpanded, setIsExpanded] = React.useState(expanded);
    
    const ref = useRef(null) as any;

    const getContentHeight = () => {
        if (ref && ref.current) {
            return ref.current.querySelector('.mds-accordion__body').offsetHeight;
        } else {
            return 0
        }
    }

    const onClickHandler = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        if (isExpanded) {
            setMaxH(getContentHeight());
        } else {
            setMaxH(0);
        }

        return () => {}
    }, [isExpanded]);

    return (
        <div ref={ref} className="mds-accordion__item">
            <h2 className="mds-accordion__header">
                <button type="button" aria-controls="collapse--xx" onClick={onClickHandler} className={`mds-collapse mds-collapse__label ${isExpanded ? 'active' : ''}`} aria-expanded={isExpanded}>
                    {title}
                    <span className={`mds-icon__${expandIcon}`} aria-hidden="true"></span>
                </button>
            </h2>
            <div id="collapse--xx" className={`mds-collapse__content ${isExpanded ? 'active' : ''}`} style={{'maxHeight': maxH}}>
                <div className="mds-accordion__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;