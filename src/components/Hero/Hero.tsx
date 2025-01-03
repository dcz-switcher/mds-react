import React, { ReactNode } from "react";

export type HeroProps = {
    upTitle?: ReactNode;
    title: ReactNode;
    subTitle?: ReactNode;
    heroActions?: ReactNode;
    image?: string;
    className?: string;
}


const Hero = ({
    upTitle,
    title = "Title",
    subTitle = "Content",
    heroActions,
    image,
    className = '',
}:HeroProps) => {

    
    return (
        <div className={`mds-hero mds-hero--action ${className}`}>
            <div className="mds-hero__body">
                {title}
                {upTitle &&
                    <div className="mds-supertitle">
                        {upTitle}
                    </div>
                }
                { subTitle && 
                    <p className="mds-lead">
                        {subTitle}
                    </p>
                }
                {heroActions && 
                    <div style={{order: 3}}>
                        {heroActions}
                    </div>
                }
            </div>
            <div className="mds-hero__img">
                <img src={`${image}`} alt=""/>
            </div>
        </div>
    )
};

export default Hero;