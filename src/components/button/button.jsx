import { useNavigate } from "react-router-dom";

export default function Button({
  text,
  bgColor,
  color,
  bgHover,
  disabled = false,
  type = "button",
  extraClass = "",
  trailingIcon = "",
  to = "",
}) {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(to);
  };
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={navigateTo}
      className={`py-2 px-3 rounded ${bgColor} ${bgHover} ${color} ${extraClass}`}
    >
      <span className={`${color} ${trailingIcon ? "mr-3" : ""}`}>{text}</span>
      {trailingIcon}
    </button>
  );
}
