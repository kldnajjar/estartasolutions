import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function RenderSelectField(props) {
  const { id, label, value, handleChange, items } = props;

  return (
    <FormControl fullWidth data-testid="select">
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        size="small"
        value={value}
        label={label}
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value="">Select a value</MenuItem>
        {items.map((item, index) => {
          return (
            <MenuItem value={item.key} key={`select-${id}-${index}`}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default RenderSelectField;
