import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

const Button = ({ label, onClick, mode }) => {
  const modeStyle = {
    warning: "btn-warning hover:bg-yellow-600 hover:text-white",
    info: "btn-info hover:bg-sky-600 hover:text-white",
  };

  return (
    <button
      type="button"
      className={`btn btn-sm ${modeStyle[mode]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["info", "warning", "default"]).isRequired,
};

export default Button;
