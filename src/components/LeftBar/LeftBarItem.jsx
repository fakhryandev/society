import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function LeftBarItem({ to, icon, text }) {
  const checkActiveNavItem = (url) => {
    const location = useLocation();
    const currentUrl = location.pathname;
    const active = currentUrl === url;

    return active;
  };

  return (
    <Link
      to={to}
      className={`hover:text-black ${
        checkActiveNavItem(to) ? "active !text-white" : ""
      }`}
    >
      {icon}
      {text}
    </Link>
  );
}

LeftBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default LeftBarItem;
