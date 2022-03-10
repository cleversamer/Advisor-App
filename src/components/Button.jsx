import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className="btn btn-primary card__btn">
      {text}
    </button>
  );
};

export default Button;
