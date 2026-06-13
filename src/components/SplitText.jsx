import React from 'react';

export const SplitText = ({ text }) => {
  return (
    <>
      {text.split(' ').map((word, wordIndex, wordsArray) => (
        <React.Fragment key={wordIndex}>
          <span style={{ whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="hl" data-char={char}>
                <span className="hl-inner">{char}</span>
              </span>
            ))}
          </span>
          {wordIndex < wordsArray.length - 1 && ' '}
        </React.Fragment>
      ))}
    </>
  );
};
