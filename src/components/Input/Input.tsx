import React, { useState } from "react";
import "./input.css";

function Input() {
  const [value, setValue] = useState("");

  const [error, setError] = useState("");

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError("");
    }

    setValue(e.target.value);
  };

  return (
    <>
      <div className="input_container">
        <input
          className="input"
          placeholder="labs@drewl.com"
          value={value}
          onChange={(e) => onChangeHandler(e)}
        />

        <button className="submit_btn">Register interest</button>
      </div>
      <p className="error_massage">{error}</p>
    </>
  );
}

export default Input;
