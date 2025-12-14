import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // closed by default on mobile

  useEffect(() => {
    setIsSidebarOpen(!isMobile ? true : false);
  }, [isMobile]);

  return (
    <Box display="flex" height="100vh" width="100%">
      {/* Sidebar */}
      <Box
        sx={{
          position: isMobile ? "absolute" : "relative",
          zIndex: 1000,
          height: "100vh",
          transition: "transform 0.3s ease",
          transform: isMobile
            ? isSidebarOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : "translateX(0)",
          width: isMobile ? 250 : 250,
        }}
      >
        <Sidebar isSidebar={isSidebarOpen} />
      </Box>

      {/* Main content */}
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        overflow="auto"
        ml={!isMobile && isSidebarOpen ? "250px" : 0} // shifts content for desktop
      >
        <Topbar setIsSidebar={setIsSidebarOpen} isMobile={isMobile} />
        <Box
          p={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            maxWidth: "100%",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
