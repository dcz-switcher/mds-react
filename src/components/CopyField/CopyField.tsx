import React, { useState, useEffect, useCallback } from 'react';

interface CopyFieldProps {
  /** La chaîne de caractères à copier */
  value: string;
  /** Le texte de confirmation qui apparaît après le clic */
  successMessage: string;
  /** Label pour les lecteurs d'écran (critique pour le bouton icon-only) */
  buttonAriaLabel: string;
  /** Classe optionnelle pour l'enveloppe globale */
  className?: string;
}

const CopyField: React.FC<CopyFieldProps> = ({
  value,
  successMessage,
  buttonAriaLabel,
  className = ""
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch (error) {
      console.error('MDS-CopyField: Erreur de copie', error);
    }
  }, [value]);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className={`mds-copy-field ${className}`}>
      {/* Valeur textuelle */}
      <span className="mds-copy-field__text">{value}</span>

      {/* Bouton Tertiaire Icon-Only conforme MDS */}
      <button 
        type="button"
        className={`mds-btn mds-btn--tertiary mds-btn--icon-only ${isCopied ? 'mds-copy-field__button--success' : ''}`}
        onClick={handleCopy}
      >
        {/* Label pour accessibilité (remplace l'aria-label) */}
        <span className="mds-sr-only">{buttonAriaLabel}</span>
        
        {/* Icône avec classe utilitaire pour la taille et la couleur bleu Macif */}
        <span 
          className={`
            ${isCopied ? 'mds-icon__check' : 'mds-icon__content-copy'} 
            mds-u-color-interactive-primary 
            mds-u-font-size-m
          `} 
          aria-hidden="true"
        ></span>
      </button>

      {/* Feedback visuel et vocal */}
      <div role="status" aria-live="polite" className="mds-copy-field__feedback">
        {isCopied && <span className="mds-copy-field__feedback-text">{successMessage}</span>}
      </div>
    </div>
  );
};

export default CopyField;