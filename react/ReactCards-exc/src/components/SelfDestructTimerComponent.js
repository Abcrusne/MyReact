import React, { useState, useEffect } from 'react';

const SelfDestructTimerComponent = () => {
  const [seconds, setSeconds] = useState(42);
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (seconds === 0) {
      setColor('red');
      return;
    }
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    //miliseconds to seconds
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="timer" style={{ backgroundColor: color }}>
      {seconds} seconds have elapsed since mounting.
    </div>
  );
};

export default SelfDestructTimerComponent;
