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
import { useChatList } from "../../hooks/useChatList";
import ChatSessionButton from "./ChatSessionButton";
import useChatSession from "../../hooks/useChatSession";

const SideBar = () => {
  const [focused, setFocused] = useState(null);
  const { chatSessions } = useChatList();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickChatSession = (sessionId) => {
    // sessionId를 사용하여 현재 세션을 찾습니다.
    const session = chatSessions.find((session) => session.id === sessionId);
    if (session) {
      setFocused(session.id);
    }
  };

  useChatSession(focused);

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

        <List sx={{ flexGrow: 1 }}>
          {chatSessions.map((session) => (
            <ChatSessionButton
              key={session.id}
              title={session.title}
              mode={session.mode}
              isFocused={focused === session.id}
              onClick={() => handleClickChatSession(session.id)}
            />
          ))}
        </List>

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
};

export default SideBar;
