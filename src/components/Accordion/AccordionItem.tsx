import React, { ReactNode, useRef, useEffect } from "react";

export type AccordionItemProps = {
    id?: string;
    title?: string;
    children?: ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onChange?: any;
    expandIcon?: string; //don't usable currently because icon is also injected by CSS. Bug declared on dec. 8th.
    className?: string;
}

const AccordionItem = ({
    id,
    title = "Item title",
    children,
    defaultExpanded = false,
    onChange,
    expanded = defaultExpanded,
    expandIcon = 'expand-more',
    className,
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

        if (onChange && id) {
            onChange(id);
        }
    }

    useEffect(() => {
        if (isExpanded) {
            setMaxH(getContentHeight());
        } else {
            setMaxH(0);
        }

        return () => {}
    }, [isExpanded]);


    useEffect(() => {
        setIsExpanded(expanded);
        return () => {}
    }, [expanded])

    return (
        <div ref={ref} id={id} className={`mds-accordion__item ${className}`}>
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