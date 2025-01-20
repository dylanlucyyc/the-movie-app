import { Box, Grid } from "@mui/material";

import MovieCard from "./MovieCard";
import PaginationContainer from "./PaginationContainer";
function DisplayPanel({
  movies,
  genres,
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "auto",
        padding: 2,
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "center",
          alignContent: "left",
          justifyContent: "center",
          gap: "18px",
        }}
      >
        {movies
          ? movies.map((movie, index) => (
              <Grid key={index} size={{ xs: 4, sm: 4, md: 3 }}>
                <MovieCard movie={movie} genres={genres} />
              </Grid>
            ))
          : ""}
      </Grid>
      <PaginationContainer
        count={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
}

export default DisplayPanel;
