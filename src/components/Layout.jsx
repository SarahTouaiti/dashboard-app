import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  // Update sidebar state on resize
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <Box display="flex" height="100vh" width="100%">
      {/* Sidebar */}
      {isSidebarOpen && (
        <Box
          sx={{
            position: isMobile ? "absolute" : "relative",
            zIndex: 1000,
            height: "100vh",
          }}
        >
          <Sidebar isSidebar={isSidebarOpen} />
        </Box>
      )}

      {/* Main content */}
      <Box flexGrow={1} display="flex" flexDirection="column" overflow="auto">
        <Topbar setIsSidebar={setIsSidebarOpen} isMobile={isMobile} />
        <Box p={{ xs: 1, sm: 2, md: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
