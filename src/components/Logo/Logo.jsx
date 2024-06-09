import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, margin: "4px" }}>
      <img src="/assets/skku-logo.png" alt="logo" style={{ height: "30px" }} />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ fontWeight: "bold", color: "white" }}
      >
        Fing-P CHATBOT
      </Typography>
    </Box>
  );
};

export default Logo;
