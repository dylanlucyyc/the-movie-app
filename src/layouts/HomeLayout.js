import { Box, Stack } from "@mui/system";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

function HomeLayout({ children }) {
  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto" }}>
      <Header />
      <Carousel />
      <Stack direction={{ xs: "column", md: "row" }}>{children}</Stack>
    </Box>
  );
}

export default HomeLayout;
