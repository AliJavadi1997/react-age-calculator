import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import DisplayResult from "./DisplayResult";
import styles from "../styles/AgeCalculator.module.css";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const currentDate = new Date();
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    if (birthdate) {
      const birthdateObj = new Date(birthdate);

      const timeDifference = currentDate - birthdateObj;

      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
      const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(timeDifference / (1000 * 60));
      const seconds = Math.floor(timeDifference / 1000);
      const milliseconds = timeDifference;

      setAge({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
      });
    }
  }, [currentDate]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <InputForm
          onDateSubmit={(date) => setBirthdate(date)}
          className={styles.form}
        />
        <DisplayResult age={age} className={styles.result} />
      </div>
    </div>
  );
}

export default AgeCalculator;
