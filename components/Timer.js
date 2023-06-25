import { useEffect } from 'react';

const Timer = ({ time, onTimeExpired, setTime }) => {
  useEffect(() => {
    let timerId;
    if (time > 0) {
      timerId = setInterval(() => {
        setTime(time - 1);
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
