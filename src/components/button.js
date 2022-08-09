import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function RenderButton(props) {
  const { label, handleClick } = props;

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={() => {
          handleClick();
        }}
      >
        {label}
      </Button>
    </Stack>
  );
}

export default RenderButton;
