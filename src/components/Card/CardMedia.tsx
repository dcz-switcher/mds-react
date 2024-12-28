import React from "react";
import { Icon } from "../Icon";

export type CardMediaProps = {
    component?: 'img' | 'icon' | 'picto';
    src?: string;
    icon?: string;
}

const CardMedia = ({
    component = 'img',
    src,
    icon,
}:CardMediaProps) => {


    return (
        <>
        {(component == 'img') ?
            <div className="mds-card__img">
                <img src={src} alt=""/>
            </div> 
        : (component == 'icon') ?  
            <Icon className="mds-icon">{icon}</Icon>
            :
            <Icon className="mds-icon" baseClassName='picto'>{icon}</Icon>

        }
        </>
    )
}

export default CardMedia;