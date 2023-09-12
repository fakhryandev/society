import React from "react";
import PropTypes from "prop-types";
import Button from "../parts/Button";

export default {
  title: "Button",
  component: Button,
};

const ButtonStory = ({ label, mode }) => <Button label={label} mode={mode} />;

ButtonStory.propTypes = {
  label: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["info", "warning", "default"]).isRequired,
};

export const Default = ButtonStory.bind({});
Default.args = {
  label: "Click Me",
  mode: "default",
};

export const ButtonInfo = ButtonStory.bind({});
ButtonInfo.args = {
  label: "Info",
  mode: "info",
};

export const ButtonWarning = ButtonStory.bind({});
ButtonWarning.args = {
  label: "Warning",
  mode: "warning",
};
