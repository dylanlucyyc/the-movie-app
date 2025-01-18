import { Box, Pagination } from "@mui/material";

function PaginationContainer({ count }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBlock: 4 }}>
      <Pagination count={count} color="primary" />
    </Box>
  );
}

export default PaginationContainer;
