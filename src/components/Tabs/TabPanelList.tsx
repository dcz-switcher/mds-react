import React, { ReactNode, Children, ReactElement } from "react";


export type TabPanelListProps = {
    children?: ReactNode;
}

const TabPanelList = ({
    children
}:TabPanelListProps) => {
    return (
        <div className="mds-tabs__panels">
            {Children.map(children, (child, index) => {
                if(index == 1) {
                    return React.cloneElement(child as ReactElement, {hidden: true});
                }
                return child
            })}
        </div>
    )
}

export default TabPanelList;