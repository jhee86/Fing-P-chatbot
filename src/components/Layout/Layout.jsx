// import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import SideBar from "./SideBar";
import ChatSessionButton from "./ChatSessionButton";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Chat from "../components/Chat/Chat";

const Layout = (props) => {
  const [focused, setFocused] = useState(null);

  const handleClickChatSession = (title) => {
    setFocused(title);
  };

  const chatSessions = [
    { title: "Chat 1", mode: "live" },
    { title: "Chat 2", mode: "live" },
    { title: "Chat 3", mode: "FAQ" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar>
        {chatSessions.map((session, index) => (
          <ChatSessionButton
            key={index}
            title={session.title}
            mode={session.mode}
            isFocused={focused === session.title}
            onClick={() => handleClickChatSession(session.title)}
          />
        ))}
        {/* <ChatSessionButton title="Chat 1" mode="live" isFocused={true} />
        <ChatSessionButton title="Chat 2" mode="live" />
        <ChatSessionButton title="Chat 3" mode="FAQ" /> */}
      </SideBar>

      {props.children}
    </Box>
  );
};

export default Layout;
