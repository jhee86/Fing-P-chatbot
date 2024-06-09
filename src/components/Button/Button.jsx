import MuiButton from "@mui/material/Button";

const Button = ({ children, sx, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      sx={{ height: "40px", borderRadius: "10px", gap: 2, ...sx }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
