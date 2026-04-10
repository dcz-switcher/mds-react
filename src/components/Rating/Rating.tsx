import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

// Définition de l'interface des Props (Vision System)
export interface MdsRatingProps {
  max?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  label?: string;
}

const MdsRating: React.FC<MdsRatingProps> = ({ 
  max = 5, 
  initialValue = 0, 
  onChange, 
  label = "Notez votre expérience" 
}) => {
  const [rating, setRating] = useState<number>(initialValue);
  const [hover, setHover] = useState<number>(0);
  const [focusedIdx, setFocusedIdx] = useState<number>(0);
  
  // Typage de la ref pour les boutons
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setRating(initialValue);
  }, [initialValue]);

  const updateRating = (value: number) => {
    setRating(value);
    // On appelle onChange s'il existe pour informer le composant parent
    if (onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIdx: number;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIdx = (index + 1) % max;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIdx = (index - 1 + max) % max;
    } else if (e.key === 'Home') {
      nextIdx = 0;
    } else if (e.key === 'End') {
      nextIdx = max - 1;
    } else {
      return;
    }

    e.preventDefault();
    setFocusedIdx(nextIdx);
    
    // Focus l'élément suivant
    const nextButton = buttonRefs.current[nextIdx];
    if (nextButton) {
      nextButton.focus();
    }
  };

  return (
    <div 
      className="mds-rating" 
      role="radiogroup" 
      aria-label={label}
      onMouseLeave={() => setHover(0)}
    >
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hover || rating);
        const isSelected = starValue === rating;

        return (
          <button
            key={i}
            ref={(el) => { buttonRefs.current[i] = el; }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={`${starValue} étoile${starValue > 1 ? 's' : ''} sur ${max}`}
            tabIndex={focusedIdx === i ? 0 : -1}
            className={`mds-rating__star ${isFilled ? 'mds-rating__star--active' : ''}`}
            onClick={() => updateRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              aria-hidden="true"
              width="1em" 
              height="1em"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default MdsRating;