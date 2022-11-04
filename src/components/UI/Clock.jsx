import React, { useEffect, useState } from "react";
import '../../styles/clock.css'
const Clock = () => {
  const [day, setDays] = useState();
  const [hour, setHours] = useState();
  const [minute, setMinutes] = useState();
  const [second, setSeconds] = useState();
  
  let interval;
  const countDown = () => {
    const destination = new Date("Nov 13,2022");
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrent = destination - now;
      const days = Math.floor(diffrent / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffrent % (1000 * 60)) / 1000);
      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(()=>{
    countDown()
  })
  return (
    <div className="clock__wrapper d-flex align-items-center gap-5">
      <div className="clock__data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{day}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{hour}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{minute}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-5">
        <div className="text-center">
          <h1 className="text-white fs-3">{second}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
