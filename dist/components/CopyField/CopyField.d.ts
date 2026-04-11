import { default as React } from 'react';
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
declare const CopyField: React.FC<CopyFieldProps>;
export default CopyField;
