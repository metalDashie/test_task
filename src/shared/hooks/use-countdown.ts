import { useEffect, useRef, useState } from 'react';

const DEFAULT_TIME_LEFT = 60;

export const useCountdown = (
  initialTimeLeftInSeconds: number = DEFAULT_TIME_LEFT,
) => {
  const [timeLeftInMS, setTimeLeftInMS] = useState(
    initialTimeLeftInSeconds * 1000,
  );
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const lastTickTimestampRef = useRef<number | null>(null);

  const clearCountdownTimeoutAndInterval = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const setupInterval = () => {
    intervalRef.current = setInterval(() => {
      lastTickTimestampRef.current = Date.now();
      setTimeLeftInMS(prevTime => {
        const newTime = prevTime - 1000;

        if (!newTime) {
          clearCountdownTimeoutAndInterval();
          setIsRunning(false);
        }

        return newTime;
      });
    }, 1000);
  };

  const start = () => {
    lastTickTimestampRef.current = Date.now();

    const restMS = timeLeftInMS % 1000;

    if (restMS) {
      timeoutRef.current = setTimeout(() => {
        lastTickTimestampRef.current = Date.now();
        const newTimeLeft = timeLeftInMS - restMS;

        if (newTimeLeft) {
          setupInterval();
        } else {
          clearCountdownTimeoutAndInterval();
          setIsRunning(false);
        }

        setTimeLeftInMS(timeLeftInMS - restMS);
      }, restMS);
    } else {
      setupInterval();
    }

    setIsRunning(true);
  };

  const pause = () => {
    clearCountdownTimeoutAndInterval();

    const passedMS = Date.now() - lastTickTimestampRef.current!;
    setTimeLeftInMS(prevTime => prevTime - passedMS);

    setIsRunning(false);
  };

  const reset = () => {
    clearCountdownTimeoutAndInterval();
    setIsRunning(false);
    setTimeLeftInMS(initialTimeLeftInSeconds * 1000);
  };

  useEffect(() => {
    return clearCountdownTimeoutAndInterval;
  }, []);

  return {
    timeLeft: Math.ceil(timeLeftInMS / 1000),
    isRunning,
    start,
    pause,
    reset,
  };
};
