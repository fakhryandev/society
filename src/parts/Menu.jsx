import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

const Menu = ({ menuList, size }) => {
  const menuSize = {
    xs: "menu-xs",
    sm: "menu-sm",
    md: "menu-md",
    lg: "menu-lg",
  };

  return (
    <ul className={`menu ${menuSize[size]} rounded-box bg-white gap-2`}>
      {menuList.map((menu) => (
        <li key={menu.text}>
          <p
            className={`${menu.isActive ? "active !text-white" : "text-black"}`}
          >
            {menu.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

const menuItemShape = {
  text: PropTypes.string.isRequired,
};

Menu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape(menuItemShape)).isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]).isRequired,
};

export default Menu;
