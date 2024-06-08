import React, { useState } from "react"; // Import useState from react package
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#E0E0E0",
    borderRadius: "30px",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 20px",
  },
});

const InputBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(""); // Use the useState hook

  const handleInputChange = (event) => {
    // console.log("inputValue: ", event.target.value);
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (text) => {
    // console.log("inputValue: ", inputValue);
    if (onSubmit) {
      onSubmit(inputValue);
    }
    setInputValue("");
  };

  return (
    <StyledTextField
      variant="outlined"
      placeholder="질문을 입력하세요"
      fullWidth
      multiline
      maxRows={2}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              disableRipple
              style={{ backgroundColor: "transparent" }}
              edge="end"
              onClick={handleSubmit}
            >
              <SendIcon style={{ color: "#2B752E" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputBar;
