import React, { useMemo } from 'react';
import './Keyboard.css';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  disabled?: boolean;
  targetWord: string;
  currentInput: string;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, disabled, targetWord, currentInput }) => {
  const keys = useMemo(() => {
    if (!targetWord) return [];
    
    // Ignore non-alphabet characters but preserve original case
    const cleanWord = targetWord.replace(/[^a-zA-Z]/g, '');
    const chars = cleanWord.split('');
    
    const shuffled = [...chars];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Assign unique IDs to handle duplicate characters
    return shuffled.map((char, index) => ({ id: `${char}-${index}`, char }));
  }, [targetWord]);

  // Determine which keys have already been used based on currentInput
  const availableKeys = useMemo(() => {
    const inputChars = currentInput.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');
    
    return keys.map(keyObj => {
      // Comparison should be case-insensitive to handle uppercase correctly
      const usedIndex = inputChars.indexOf(keyObj.char.toLowerCase());
      if (usedIndex !== -1) {
        // Remove from inputChars so we only consume the correct amount of duplicates
        inputChars.splice(usedIndex, 1);
        return { ...keyObj, used: true };
      }
      return { ...keyObj, used: false };
    });
  }, [keys, currentInput]);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {availableKeys.map(keyObj => (
          <button
            key={keyObj.id}
            className={`keyboard-key ${keyObj.used ? 'keyboard-key-hidden' : ''}`}
            onClick={() => onKeyPress(keyObj.char)}
            disabled={disabled || keyObj.used}
          >
            {keyObj.char}
          </button>
        ))}
      </div>
    </div>
  );
};
