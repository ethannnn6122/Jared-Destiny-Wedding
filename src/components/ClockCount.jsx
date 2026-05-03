import React, { useEffect, useState, useRef } from "react";

const Clock = ({ deadline, className }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  const intervalRef = useRef(null);

  useEffect(() => {
    getTimeUntil(deadline);
    intervalRef.current = setInterval(() => getTimeUntil(deadline), 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [deadline]);

  return (
    <div className={className}>
        {leading0(days)} Days : {leading0(hours)} Hours : {leading0(minutes)} Minutes : {leading0(seconds)} Seconds
    </div>
  );
};

export default Clock;
