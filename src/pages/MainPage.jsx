import InputBar from "../components/InputBar/InputBar";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import { drawerWidth } from "../theme/theme";
import Chat from "../components/Chat/Chat";
import Layout from "../components/Layout/Layout";

const MainPage = () => {
  return (
    <Layout>
      <Chat />

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
    </Layout>
  );
};

export default MainPage;
