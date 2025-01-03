import React, { HTMLAttributes, ReactNode, createContext, useContext } from "react"

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

  const colorMappingClass = {
    primary: 'color-macif--1',
    text: 'color-grey--80',
  }

const TypographyAncestryContext = createContext(false);
export const useTypographyAncestry = () => useContext(TypographyAncestryContext);

export interface typographyProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    variant? : "body1" | "body2" | "body3" | "body4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "underline" ;
    component?: string;
    align?: "center" | "inherit" | "justify" | "left" | "right";
    underlineColor?: string;
    framed?: boolean;
    color?: 'primary' | 'text';
    className?: string;
}

export default function Typography({
    children, 
    variant = "body2",
    component,
    align = "left",
    underlineColor = '',
    framed = false,
    color,
    className = '',
    ...props
}:typographyProps) {
    const hasTypographyParent = useTypographyAncestry();

    //const tagComponent = component || variantMappingTag[variant];
    const tagComponent = (hasTypographyParent) ? "span" : (component || variantMappingTag[variant]);
    const Tag = tagComponent as "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
    const variantClass = (variant == "underline" && underlineColor) ? variantMappingClass[variant] + '--' + underlineColor : variantMappingClass[variant];

    const colorClass = (!framed && variant.substring(0, 1) != 'h' && color) ? 'mds-color__'+colorMappingClass[color] : '';

    return (
        <TypographyAncestryContext.Provider value={true}>
            <Tag className={`${variantClass} ${framed ? "mds-framed" : ""} ${colorClass} ${className}`} style={{textAlign: align}} {...props}>
                {framed ? (
                    <span>{children}</span>
                ):(
                    children
                )}
            </Tag>
        </TypographyAncestryContext.Provider>
    )
}