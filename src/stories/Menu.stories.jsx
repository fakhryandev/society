import React from "react";
import PropTypes from "prop-types";
import Menu from "../parts/Menu";

export default {
  title: "Menu",
  component: Menu,
};

const MenuStory = ({ menuList, size }) => (
  <Menu menuList={menuList} size={size} />
);

const menuItemShape = {
  text: PropTypes.string.isRequired,
};

MenuStory.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape(menuItemShape)).isRequired,
  size: PropTypes.oneOf(["info", "warning", "default"]).isRequired,
};

const menu = [
  {
    text: "Home",
    isActive: true,
  },
  {
    text: "Leaderboard",
    isActive: false,
  },
];

export const Default = MenuStory.bind({});
Default.args = {
  menuList: menu,
  size: "md",
};

export const ExtraSmallMenu = MenuStory.bind({});
ExtraSmallMenu.args = {
  menuList: menu,
  size: "xs",
};

export const SmallMenu = MenuStory.bind({});
SmallMenu.args = {
  menuList: menu,
  size: "sm",
};

export const LargeMenu = MenuStory.bind({});
LargeMenu.args = {
  menuList: menu,
  size: "lg",
};
