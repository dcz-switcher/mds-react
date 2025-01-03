import React from "react";
import { Icon } from "../Icon";

export type TabProps = {
    label?: string;
    icon?: string;
    ariaCurrent?: boolean;
    className?: string;
}

const Tab = ({
    label,
    icon,
    ariaCurrent = false,
    className = '',
}:TabProps) => {

    const tabIcon = (icon) ? <Icon baseClassName="picto" size="xsmall">{icon}</Icon> : '';

    return (
        <button className={`mds-tabs__tab ${className}`} type="button" aria-current={ariaCurrent}>{tabIcon}{label}</button>
    )
}

export default Tab;