import { Box, Pagination } from "@mui/material";

function PaginationContainer({ count, currentPage, setCurrentPage }) {
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBlock: 4 }}>
      <Pagination
        count={count}
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default PaginationContainer;
