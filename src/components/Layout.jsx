import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      height="100vh"
      width="100%"
    >
      {/* Sidebar */}
      <Sidebar isSidebar={isSidebarOpen} />

      {/* Main content area */}
      <Box flexGrow={1} overflow="auto">
        <Topbar setIsSidebar={setIsSidebarOpen} />
        <Box p={{ xs: 1, sm: 2, md: 3 }}>
          {/* Outlet renders the current page */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
