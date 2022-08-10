import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function RenderButton(props) {
  const { label, handleClick, fieldClassName } = props;

  return (
    <Stack spacing={2} direction="row" data-testid="button">
      <Button
        variant="contained"
        className={fieldClassName ? fieldClassName : ""}
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
