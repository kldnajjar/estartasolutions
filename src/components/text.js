import React from "react";
import TextField from "@mui/material/TextField";

function RenderTextField(props) {
  const { label, value, handleChange } = props;

  return (
    <TextField
      size="small"
      label={label}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      data-testid="text"
    />
  );
}

export default RenderTextField;
