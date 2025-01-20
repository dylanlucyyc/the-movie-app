import { Box, Typography, Chip, Stack } from "@mui/material";

function SideBar({ genres, selectedGenreId, setSelectedGenreId }) {
  const handleClick = (genre) => {
    setSelectedGenreId(genre.id);
  };
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: 28,
          mb: 3,
          fontWeight: "bold",
          minWidth: "300px",
          width: "300px",
        }}
      >
        Categories
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ flexWrap: "wrap", minWidth: "300px", width: "300px" }}
      >
        {genres
          ? genres.map((genre, index) => (
              <Chip
                label={`${genre.name}`}
                onClick={() => handleClick(genre)}
                color="primary"
                key={index}
              />
            ))
          : ""}
      </Stack>
    </Box>
  );
}

export default SideBar;
