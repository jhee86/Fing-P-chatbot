import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import ChatSessionButton from "./ChatSessionButton";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useChatList } from "../../hooks/useChatList";
import useChatSession from "../../hooks/useChatSession";

const Layout = (props) => {
  const [focused, setFocused] = useState(null);
  const { chatSessions } = useChatList();
  useChatSession(focused);

  const handleClickChatSession = (sessionId) => {
    // sessionId를 사용하여 현재 세션을 찾습니다.
    const session = chatSessions.find((session) => session.id === sessionId);
    if (session) {
      setFocused(session.id);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar>
        {chatSessions.map((session) => (
          <ChatSessionButton
            key={session.id}
            title={session.title}
            mode={session.mode}
            isFocused={focused === session.id}
            onClick={() => handleClickChatSession(session.id)}
          />
        ))}
      </SideBar>

      {props.children}
    </Box>
  );
};

export default Layout;
