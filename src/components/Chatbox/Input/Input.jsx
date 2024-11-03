import { Box, IconButton, OutlinedInput } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("message: ", inputValue);
    setInputValue("");
  };
  return (
    <Box
      component="form"
      display={"flex"}
      alignItems={"center"}
      gap={1}
      p={2}
      onSubmit={handleSendMessage}
    >
      <IconButton>
        <ControlPointIcon />
      </IconButton>
      <OutlinedInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ flex: 1, borderRadius: 20 }}
        size="small"
        endAdornment={
          <IconButton size="small">
            <InsertEmoticonIcon />
          </IconButton>
        }
      />
      <IconButton
        sx={{
          bgcolor: "text.secondary",
          "&:hover": {
            bgcolor: "text.primary",
          },
        }}
        type="submit"
      >
        <SendIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
    </Box>
  );
}

export default Input;
