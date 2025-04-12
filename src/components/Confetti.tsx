
import React, { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';

const Confetti = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hasSeenConfetti = localStorage.getItem('hasSeenConfetti');
    
    if (!hasSeenConfetti) {
      const jsConfetti = new JSConfetti();
      
      // Small delay to ensure everything is loaded
      const timer = setTimeout(() => {
        jsConfetti.addConfetti({
          emojis: ['🧁', '🍰', '🍪', '🍩', '👨‍🍳'],
          emojiSize: 50,
          confettiNumber: 60,
        });
        setShown(true);
        localStorage.setItem('hasSeenConfetti', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default Confetti;
