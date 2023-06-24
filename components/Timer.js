import { useState, useEffect } from 'react';

const Timer = ({ time, onTimeout }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          onTimeout(); // Trigger callback function when timer reaches 0
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time, onTimeout]);

  return <div>{seconds}s</div>;
};

export default Timer;
