/**
 * Because title is not required in ths version, aria-labeledby is not set
 * That's because aria-labeledby reference the title id ... and title id is not required CQFD
 * aria-labelledby="xxx"
 */
import React, { ReactNode, useEffect, useRef } from "react";

export type SidePanelProps = {
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    showCloseButton?: boolean;
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
    showCloseButton = false,
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
        <dialog ref={ref} role="dialog" id="mds-modal" className="mds-dialog" aria-modal="true">
            <div className={`mds-modal mds-modal--side-panel mds-modal--${ sizeMappingClass[size]}`} role="document">
                
                {showCloseButton && 
                    <button className="mds-close">
                        <span className="mds-icon__close" aria-hidden="true"></span>
                        <span className="mds-sr-only">Fermer la fenêtre de la modale</span>
                    </button>
                }

                <div className="mds-modal__container">
                    {children}
                </div>
            </div>
        </dialog>
    )
}

export default SidePanel;