import React, { ReactNode } from "react"

const variantMappingClass = {
    h1: 'mds-h1',
    h2: 'mds-h2',
    h3: 'mds-h3',
    h4: 'mds-h4',
    h5: 'mds-h5',
    h6: 'mds-h6',
    body1: 'mds-text--1',
    body2: 'mds-text--2',
    body3: 'mds-text--3',
    body4: 'mds-text--4',
    underline: 'mds-underline',
  };

  const variantMappingTag = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    body4: 'p',
    underline: 'span',
  }

export type typographyProps = {
    readonly children?: ReactNode;
    readonly variant? : "body1" | "body2" | "body3" | "body4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "underline" ;
    readonly component?: string;
    readonly align?: "center" | "inherit" | "justify" | "left" | "right";
}

export default function Typography({
    children, 
    variant = "body1",
    component,
    align = "left"
}:typographyProps) {
   
    const tagComponent = component || variantMappingTag[variant];
    const Tag = tagComponent as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

    return (
        <Tag className={variantMappingClass[variant]} style={{textAlign: align}}>
            {children}
        </Tag>
      
    )
}