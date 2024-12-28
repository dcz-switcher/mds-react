import React, { ReactNode, useEffect, useRef } from "react";
import SidePanelHeader from "./SidePanelHeader";

export type SidePanelProps = {
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    title?: string;
    icon?: string;
    visuallyHideTitle?: boolean;
    showCloseButton?: boolean;
    className?: string;
};

const sizeMappingClass = {
    'small' : 'small',
    'medium': 'medium',
    'large' : 'big'
}


const SidePanel = ({
    children,
    open = false,
    onClose,
    size = 'medium',
    title,
    icon,
    visuallyHideTitle = false,
    showCloseButton = false,
    className,
}:SidePanelProps) => {
    const ref = useRef(null) as any;

    const ariaId = React.useId();

    let $closeBtn:HTMLButtonElement;
    
    const closeHandler = () => {
        if (onClose) { 
            onClose();
        }
    }

    const escapeKeyHandler = (e:KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault();
            e.stopImmediatePropagation();
            closeHandler();
        }
    }

    const backdropClickHandler = (e:MouseEvent) => {
        const el:any = e.target;
        if(el.classList.contains('mds-dialog')){
            closeHandler();
        }
    }

    useEffect(() => {    
        // mount
        if (showCloseButton){
            $closeBtn = ref.current.querySelector('button.mds-close');
            $closeBtn.addEventListener("click", closeHandler);
        }

        ref.current.addEventListener('click', backdropClickHandler);
        
        return () => {
            // unmount
            if (showCloseButton){
                $closeBtn.removeEventListener("click", closeHandler);
            }
            try{
                ref.current.removeEventListener('click', backdropClickHandler);
            } catch (er){}
        }
    }, []);

    useEffect(() => {
        if (open === true) {
            document.addEventListener('keydown', escapeKeyHandler);
            ref.current.showModal();
        } else {
            ref.current.close();
        }

        return () => {
            document.removeEventListener('keydown', escapeKeyHandler);
        }
    }, [open]);

    return (
        <dialog ref={ref} role="dialog" id="mds-modal" className={`mds-dialog ${className}`} aria-modal="true" aria-labelledby={ariaId}>
            <div className={`mds-modal mds-modal--side-panel mds-modal--${ sizeMappingClass[size]}`} role="document">
                
                {showCloseButton && 
                    <button className="mds-close">
                        <span className="mds-icon__close" aria-hidden="true"></span>
                        <span className="mds-sr-only">Fermer la fenêtre de la modale</span>
                    </button>
                }

                <div className="mds-modal__container">
                    <SidePanelHeader title={title} icon={icon} visuallyHidden={visuallyHideTitle} id={ariaId} />
                    {children}
                </div>
            </div>
        </dialog>
    )
}

export default SidePanel;