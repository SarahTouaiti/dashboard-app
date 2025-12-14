import { Box, useMediaQuery } from "@mui/material";

const ResponsiveGrid = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      display="grid"
      gridTemplateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(12, 1fr)"}
      gap="20px"
      autoRows="140px"
    >
      {children}
    </Box>
  );
};

export default ResponsiveGrid;
