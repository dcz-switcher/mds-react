import React, { useState, useRef } from "react";

type CopyFieldType = "iban" | "email" | "phone";

interface CopyFieldProps {
  value: string;
  type?: CopyFieldType;
  label?: string;
  feedbackMessage?: string;
  onCopy?: (value: string) => void;
  className?: string;
}

export default function CopyField({
  value,
  type = "email",
  label,
  feedbackMessage,
  onCopy,
  className = "",
}: CopyFieldProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const valueRef = useRef<HTMLSpanElement | null>(null);

  const defaultLabels: Record<CopyFieldType, string> = {
    iban: "Copier l’IBAN",
    email: "Copier l’adresse email",
    phone: "Copier le numéro de téléphone",
  };

  const defaultMessages: Record<CopyFieldType, string> = {
    iban: "IBAN copié dans le presse-papier",
    email: "Adresse email copiée",
    phone: "Numéro de téléphone copié",
  };

  const ariaLabel = label ?? `${defaultLabels[type]} ${value}`;
  const successMessage = feedbackMessage ?? defaultMessages[type];

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);
      setMessage(successMessage);

      if (onCopy) {
        onCopy(value);
      }

      setTimeout(() => {
        setCopied(false);
        setMessage("");
      }, 3000);
    } catch (e) {
      setMessage("Erreur lors de la copie");

      // fallback sélection manuelle
      if (valueRef.current) {
        const range = document.createRange();
        range.selectNode(valueRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  };

  return (
    <div className={`copy-field ${className}`}>
      <span ref={valueRef}>{value}</span>

      <button
        type="button"
        onClick={handleCopy}
        aria-describedby="copy-feedback"
        aria-label={ariaLabel}
        className={`copy-btn ${copied ? "copied" : ""}`}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {copied ? "check" : "content_copy"}
        </span>

        <span className="visually-hidden">
          {copied ? "Copié" : "Copier"}
        </span>
      </button>

      <span
        id="copy-feedback"
        className="visually-hidden"
        aria-live="polite"
      >
        {message}
      </span>
    </div>
  );
}