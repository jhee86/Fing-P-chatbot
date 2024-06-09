import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const ChatSessionButton = ({ title, mode, focused }) => {
  const subtitle = mode === "live" ? "Live mode" : "FAQ mode";
  const modeColor = mode === "live" ? "#FF5353" : "#5AA7EE";

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton aria-label="more" sx={{ height: "fit-content" }}>
          <MoreHorizIcon sx={{ color: grey[50] }} />
        </IconButton>
      }
      sx={{
        borderRadius: "10px",
        marginBottom: "8px",
        bgcolor: focused ? "#ADBC9F" : null,
        "&:hover": {
          bgcolor: "#A9B49A",
        },
      }}
    >
      <ListItemButton
        disableRipple
        sx={{ width: "100%", borderRadius: "10px" }}
      >
        <ListItemIcon>
          <ChatBubbleIcon sx={{ color: grey[50] }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" style={{ color: "#FFFFFF" }}>
              {title}
            </Typography>
          }
          secondary={
            <Box display="flex" alignItems="center">
              <Box
                component="span"
                sx={{
                  height: "8px",
                  width: "8px",
                  bgcolor: modeColor,
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "4px",
                }}
              />
              <Typography variant="body2" style={{ color: modeColor }}>
                {subtitle}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ChatSessionButton;
