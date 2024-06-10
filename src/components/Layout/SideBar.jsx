import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { drawerWidth } from "../../theme/theme";
import DropDown from "../Dropdown/Dropdown";
import { bgcolor } from "@mui/system";

export default function SideBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickAddQuestion = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const DropdownItems = [
    {
      id: "live",
      text: "Live Mode",
      onClick: () => console.log("Live Mode"),
    },
    {
      id: "faq",
      text: "FAQ Mode",
      onClick: () => console.log("Live Mode"),
    },
  ];

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#2A7236",
            padding: "20px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          },
        }}
        open
      >
        <Logo />
        <Box sx={{ marginTop: "64px" }}>{/* margein */}</Box>

        <List sx={{ flexGrow: 1 }}>{props.children}</List>

        <Box
          sx={{
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{ width: "100%", marginBottom: "10px", bgcolor: "#294B29" }}
            onClick={onClickAddQuestion}
          >
            Add Question
          </Button>
          <DropDown
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            items={DropdownItems}
          />

          <Button
            startIcon={<LogoutIcon />}
            sx={{ width: "100%", bgcolor: "#777777" }}
          >
            Sign Out
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
