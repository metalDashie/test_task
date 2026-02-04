import { useEffect, useRef } from 'react';

const DEFAULT_DELAY = 1000;

export const useDebounce = (
  callback: () => void,
  delay: number = DEFAULT_DELAY,
) => {
  const timeoutRef = useRef<number | null>(null);

  const clearDebounceTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const callWithDebounce = () => {
    clearDebounceTimeout();

    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  };

  useEffect(() => {
    return clearDebounceTimeout;
  }, []);

  return {
    callWithDebounce,
  };
};
