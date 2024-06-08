import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 320;

export default function SideBar(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#2A7236",
              padding: "20px",
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
          open
        >
          <Logo />
          <Box sx={{ marginTop: "64px" }}>{/* margein */}</Box>

          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
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
              sx={{ width: "100%", marginBottom: "10px" }}
            >
              Add Question 1
            </Button>
            <Button startIcon={<LogoutIcon />} sx={{ width: "100%" }}>
              Sign Out
            </Button>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
