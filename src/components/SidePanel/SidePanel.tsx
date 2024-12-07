import React, { useEffect, useRef } from "react";

export type SidePanelProps = {
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'big';
};

const SidePanel = ({
    open = false,
    onClose,
    size = 'medium'
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
        $closeBtn = ref.current.querySelector('button.mds-close');

        $closeBtn.addEventListener("click", closeHandler);
        ref.current.addEventListener('click', backdropClickHandler);
        
        return () => {
            // unmount
            $closeBtn.removeEventListener("click", closeHandler);
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
            <div className={`mds-modal mds-modal--side-panel mds-modal--${size}`} role="document">
                <button className="mds-close">
                    <span className="mds-icon__close" aria-hidden="true"></span>
                    <span className="mds-sr-only">Fermer la fenêtre de la modale</span>
                </button>
                <div className="mds-modal__container">
                    <div className="mds-modal__header">
                        <span aria-hidden="true" className="mds-icon__calendar-today--left"></span>
                        <h1 className="mds-modal__title">Titre</h1>
                    </div>
                    <hr className="mds-divider mds-divider--small" />
                    <div className="mds-modal__content">
                        <p className="mds-text--3">Zone de contenu libre et éditable en HTML</p>
                    </div>
                    <div className="mds-modal__footer">
                        <div className="mds-btn-group">
                            <button className="mds-btn mds-btn--primary">
                                button
                            </button>
                            <button className="mds-btn mds-btn--secondary">
                                button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default SidePanel;