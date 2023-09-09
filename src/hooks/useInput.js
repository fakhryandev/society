import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChanged = ({ target }) => {
    setValue(target.value);
  };

  return [value, handleValueChanged, setValue];
};

export default useInput;
