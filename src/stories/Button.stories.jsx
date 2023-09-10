import React from "react";
import Button from "../parts/Button";

export default {
  title: "Button",
  component: Button,
};

const ButtonStory = (args) => <Button {...args} />;

export const Default = ButtonStory.bind({});
Default.args = {
  label: "Click Me",
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
