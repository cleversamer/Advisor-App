import React from "react";
import Button from "./Button";

const Card = ({ text, btnText, onFetchAdvice }) => {
  return (
    <div className="card">
      <h1 className="card__heading">{text}</h1>
      <Button text={btnText} onClick={onFetchAdvice} />
    </div>
  );
};

export default Card;
