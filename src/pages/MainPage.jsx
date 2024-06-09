// import { Route, Routes } from 'react-router-dom';
import SideBar from "../components/Layout/SideBar";
import ChatSessionButton from "../components/Layout/ChatSessionButton";
import InputBar from "../components/InputBar/InputBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { drawerWidth } from "../theme/theme";
import Chat from "../components/Chat/Chat";

const MainPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar>
        <ChatSessionButton title="Chat 1" />
        <ChatSessionButton title="Chat 2" />
        <ChatSessionButton title="Chat 3" />
      </SideBar>

      <Chat />

      {/* Add padding at the bottom to avoid overlap */}
      <Box sx={{ pb: "40px" }} />

      {/* Fixed InputBar at the bottom */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { sm: `${drawerWidth}px` },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          p: 4,
        }}
      >
        <InputBar />
      </Box>
    </Box>
  );
};

export default MainPage;
