import React from "react";
import { Icon } from "../Icon";

export type TabProps = {
    label?: string;
    icon?: string;
    ariaCurrent?: boolean;
}

const Tab = ({
    label,
    icon,
    ariaCurrent = false
}:TabProps) => {

    const tabIcon = (icon) ? <Icon baseClassName="picto" size="xsmall">{icon}</Icon> : '';

    return (
        <button className="mds-tabs__tab" type="button" aria-current={ariaCurrent}>{tabIcon}{label}</button>
    )
}

export default Tab;