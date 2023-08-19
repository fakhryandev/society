import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LeftBarItem({ to, icon, text }) {
  return (
    <Link to={to}>
      {icon}
      {text}
    </Link>
  );
}

LeftBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LeftBarItem;
