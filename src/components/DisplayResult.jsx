import React from "react";
import styles from "../styles/DisplayResult.module.css";

function DisplayResult({ age }) {
  return (
    <div className={styles.container}>
      <p>Age:</p>
      <ul className={styles.list}>
        <li>Years: {age.years}</li>
        <li>Months: {age.months}</li>
        <li>Weeks: {age.weeks}</li>
        <li>Days: {age.days}</li>
        <li>Hours: {age.hours}</li>
        <li>Minutes: {age.minutes}</li>
        <li>Seconds: {age.seconds}</li>
        <li>Milliseconds: {age.milliseconds}</li>
      </ul>
    </div>
  );
}

export default DisplayResult;
