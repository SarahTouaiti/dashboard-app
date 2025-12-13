import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height={{ xs: "60vh", md: "75vh" }}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        p={1} // optional padding
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
