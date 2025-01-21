import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: duration,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { minutes, seconds } = prevTime;

        // Check if time is up
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          onTimeUp();
          return prevTime;
        }

        // Calculate the new time
        if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          return { minutes, seconds: seconds - 1 };
        }
      });
    }, 500);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return (
    <div className="rounded-full w-16 h-16 flex justify-center items-center gap-2">
      <span className="text-2xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span className="text-md">{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;