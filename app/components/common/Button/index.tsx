import React from "react";

interface Props {
  text: string;
  handleClick: () => void;
  disabled?: boolean;
  buttonSize?: string;
  icon?: React.ReactElement;
  border?: string;
  background?: string;
  color?: string;
}

const Button = ({
  text,
  handleClick = () => {},
  disabled = false,
  buttonSize = "large",
  icon,
  border,
  background = "bg-primary",
  color = "text-white",
}: Props) => {
  const buttonStyles =
    buttonSize === "large"
      ? "py-2.5 px-10 text-lg font-medium gap-3"
      : buttonSize === "medium" && "py-1.5 px-2 gap-2";

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`flex items-center rounded-lg ${background} ${color} ${buttonStyles} ${border}`}
    >
      {icon && <div>{icon}</div>} {text}
    </button>
  );
};

export default Button;
