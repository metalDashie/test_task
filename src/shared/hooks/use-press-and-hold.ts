import { useEffect, useRef, useState } from 'react';

const DEFAULT_DELAY = 1000;

export const usePressAndHold = (
  callback?: () => void,
  delay: number = DEFAULT_DELAY,
) => {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const clearPressAndHoldTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const onPressIn = () => {
    timeoutRef.current = setTimeout(() => {
      callback?.();
      setIsHeld(true);
    }, delay);
  };

  const onPressOut = () => {
    clearPressAndHoldTimeout();
    setIsHeld(false);
  };

  useEffect(() => {
    return clearPressAndHoldTimeout;
  }, []);

  return {
    isHeld,
    onPressIn,
    onPressOut,
  };
};
