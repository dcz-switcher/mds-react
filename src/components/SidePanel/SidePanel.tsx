import React, { ReactNode, useEffect, useRef } from "react";

export type SidePanelProps = {
    titleIcon?: string;
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    title?: string;
    hideCloseButton?: boolean;
    footer?: ReactNode;
};

const sizeMappingClass = {
    'small' : 'small',
    'medium': 'medium',
    'large' : 'big'
}


const SidePanel = ({
    titleIcon,
    children,
    open = false,
    onClose,
    size = 'medium',
    title = "Title",
    hideCloseButton = false,
    footer
}:SidePanelProps) => {
    const ref = useRef(null) as any;

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
        if (!hideCloseButton){
            $closeBtn = ref.current.querySelector('button.mds-close');
            $closeBtn.addEventListener("click", closeHandler);
        }

        ref.current.addEventListener('click', backdropClickHandler);
        
        return () => {
            // unmount
            if (!hideCloseButton){
                $closeBtn.removeEventListener("click", closeHandler);
            }

            ref.current.removeEventListener('click', backdropClickHandler);
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
        <dialog ref={ref} role="dialog" id="mds-modal" className="mds-dialog" aria-labelledby="xxx" aria-modal="true">
            <div className={`mds-modal mds-modal--side-panel mds-modal--${ sizeMappingClass[size]}`} role="document">
                
                {!hideCloseButton && 
                    <button className="mds-close">
                        <span className="mds-icon__close" aria-hidden="true"></span>
                        <span className="mds-sr-only">Fermer la fenêtre de la modale</span>
                    </button>
                }

                <div className="mds-modal__container">
                    <div className="mds-modal__header">
                        {titleIcon &&
                            <span aria-hidden="true" className={`mds-icon__${titleIcon}--left`}></span>
                        }
                        <h1 className="mds-modal__title">{title}</h1>
                    </div>
                    <hr className="mds-divider mds-divider--small" />
                    <div className="mds-modal__content">
                        {children}
                    </div>

                    {footer && 
                        <div className="mds-modal__footer">
                            {footer}
                        </div>
                    }

                </div>
            </div>
        </dialog>
    )
}

export default SidePanel;