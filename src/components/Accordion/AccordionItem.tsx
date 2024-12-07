import React from "react";

export type AccordionItemProps = {
    title?: string;
}

const AccordionItem = ({
    title = "Item title"
}:AccordionItemProps) => {
    return (
        <div className="mds-accordion__item">
            <h2 className="mds-accordion__header">
                <button type="button" aria-controls="collapse--xx" className="mds-collapse mds-collapse__label" aria-expanded="false">
                    {title}
                    <span className="mds-icon__expand-more" aria-hidden="true"></span>
                </button>
            </h2>
            <div id="collapse--xx" className="mds-collapse__content">
                <div className="mds-accordion__body">
                    <p className="mds-accordion__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vel augue gravida placerat. Vivamus tempus, sem at tempor tempus, neque nisl mattis ex, ut dictum libero lectus ut ipsum. Vivamus placerat imperdiet interdum.
                    </p>
                    <div className="mds-accordion__section">
                        <p className="mds-accordion__section-title">Question</p>
                        <button className="mds-btn mds-btn--secondary">
                            <span>Oui</span>
                        </button>
                        <button className="mds-btn mds-btn--secondary">
                            <span>Non</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;