import { useEffect } from 'react';

const Timer = ({ time, onTimeExpired, setTime }) => {
  useEffect(() => {
    let timerId;

    if (time > 0) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      onTimeExpired();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, onTimeExpired, setTime]);

  return <div>{time}</div>;
};

export default Timer;
