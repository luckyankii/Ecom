import React, { useEffect, useState } from "react";

function CountDown() {
  const [timeleft, setTimeleft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeleft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer); // Event loop me se bahar lanna jaruri hot a stop watch bala concept
  });

  function calculateTimeLeft() {
    const diff = new Date("2023-08-29") - +new Date();
    // The +new Date() expression is used to convert the current date and time into a numeric timestamp.
    let timeleft = {};
    if (diff > 0)
      timeleft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    return timeleft;
  }

  const timerComponent = Object.keys(timeleft).map((interval) => {
    if (!timeleft[interval]) return null;
    return (
      <span className="text-[25px] text-[#475ad2]">
        {timeleft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {timerComponent.length ? (
        timerComponent
      ) : (
        <span className="text-rose-700 text-[25px]">Time's Up</span>
      )}
    </div>
  );
}

export default CountDown;
