import React, { useState, useEffect } from "react";

//Style
import style from "./TimeZone.module.css";

const TimeZone = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div>
      <p className={style.time}>{date.toString()}</p>
    </div>
  );
};

export default TimeZone;
