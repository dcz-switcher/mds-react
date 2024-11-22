import React, { MouseEventHandler } from "react";

export type ButtonProps = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};


const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <button {...props}>
      {text}
    </button>
  );
};

export default Button;