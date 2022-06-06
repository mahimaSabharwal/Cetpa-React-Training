import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleString();
  const [curTime, setCurTime] = useState(time);

  const getUpdatedTime = () => {
    let time = new Date().toLocaleString();
    setCurTime(time);
  };
  setInterval(getUpdatedTime, 1000);
  return (
    <>
      <h2>Digital Clock Functional component: </h2>
      <div className="bd-highlight">{curTime}</div>
    </>
  );
};

export default DigitalClock;
