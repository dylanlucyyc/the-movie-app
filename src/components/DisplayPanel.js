import { Box, Grid } from "@mui/material";

import MovieCard from "./MovieCard";
import PaginationContainer from "./PaginationContainer";
function DisplayPanel() {
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
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 4, sm: 4, md: 3 }}>
            <MovieCard />
          </Grid>
        ))}
      </Grid>
      <PaginationContainer count={10} />
    </Box>
  );
}

export default DisplayPanel;
