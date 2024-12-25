import React, { ComponentProps, ReactNode } from "react";

export interface TextFieldProps extends ComponentProps<'input'> {
    endAdornment?: ReactNode;
    error?: boolean;
    errorText?: string;
    fullWidth?: boolean;
    id?:string;
    label?: string;
    optionalText?: string;
    required?: boolean;
    reverse?: boolean;
    supportingText?: string;
    startIcon?: string;
    type?: 'number' | 'text' | 'tel' | 'email' | 'password' | any;
}

const inputMappingClass:any = {
    "text"      : "text--basic",
    "password"  : "text--basic",
    "tel"       : "phone--basic",
    "email"     : "mail",
}

const TextField = ({
    endAdornment,
    error = false,
    errorText,
    fullWidth = false,
    id,
    label,
    optionalText = "facultatif",
    required = false,
    reverse = false,
    supportingText,
    startIcon,
    type = 'text',
    ...props
}:TextFieldProps) => {

    const requiredLabel = (!required) ? <span className="mds-label--optional">({optionalText})</span> : '';
    const inputClass = inputMappingClass[type] || inputMappingClass['text'];
    const errorId = React.useId();

    return (
        <div className={`mds-input-group ${reverse ? 'mds-input-group--reverse' : ''}`}><label htmlFor={id} className="mds-label">{label} {requiredLabel} {supportingText ? <span className="mds-label--description">{supportingText}</span>: ''}</label>
            <div className={`mds-input-cell ${fullWidth ? 'mds-full-width': ''} ${startIcon ? 'mds-wrapper--icon-left': ''}`}>
                {startIcon ? 
                    <span aria-hidden="true" className={`mds-input__icon mds-icon__${startIcon}`}></span>
                    : ''
                }
                <input {...props} className={`mds-input mds-input-${inputClass}`} id={id} type={type} aria-required={required} aria-invalid={error} aria-describedby={error && errorText ? errorId : ''} />
                {type === 'password' ?
                    <button type="button" className="mds-input__icon">
                        <span className="mds-sr-only">Masquer le mot de passe</span>
                        <span className="mds-icon__visibility" aria-hidden="true"></span>
                    </button>
                : endAdornment ?
                    <span aria-hidden="true" className="mds-input__unit"> {endAdornment} </span>
                :''}
            </div>
            {error && errorText ? 
                <p className="mds-message--error" id={errorId}><span className="mds-icon__error--left" aria-hidden="true"></span>{errorText}</p>
            : ''}
        </div>
    )
}

export default TextField