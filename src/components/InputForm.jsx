import React, { useState } from "react";
import styles from "../styles/InputForm.module.css";

function InputForm({ onDateSubmit }) {
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSubmit(birthdate);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Enter your birthdate:</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button type="submit">Calculate Age</button>
      </form>
    </div>
  );
}

export default InputForm;
