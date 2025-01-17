import React, { useEffect, useState } from "react";
import { Box, IconButton, Slide, Stack, Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Mock Card Component
const Card = ({ id }) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      backgroundColor: "lightgray",
    }}
  >
    Card {id}
  </Box>
);

function Carousel() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const cardsPerPage = 1;
  //   const containerWidth = 100%; // Set the container width for the carousel
  const duplicateCards = Array.from({ length: 10 }, (_, i) => (
    <Card id={i} key={i} />
  ));

  const handleNextPage = () => {
    if (currentPage < Math.ceil(duplicateCards.length / cardsPerPage) - 1) {
      setSlideDirection("left");
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setSlideDirection("right");
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleIndicatorClick = (index) => {
    if (index !== currentPage) {
      setSlideDirection(index > currentPage ? "left" : "right");
      setCurrentPage(index);
    }
  };

  useEffect(() => {
    setCards(duplicateCards);
  }, []);

  useEffect(() => {
    // Function to update the container width
    const updateWidth = () => setContainerWidth(window.innerWidth);

    // Add event listener to track window resizing
    window.addEventListener("resize", updateWidth);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        width: "100%",
        margin: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handlePrevPage}
          sx={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          disabled={currentPage === 0}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Slide direction={slideDirection} in={true}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
              height: "100%",
              transform: `translateX(-${currentPage * containerWidth}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {cards
              .slice(
                currentPage * cardsPerPage,
                currentPage * cardsPerPage + cardsPerPage
              )
              .map((card) => (
                <Box sx={{ width: "100%" }} key={card.key}>
                  {card}
                </Box>
              ))}
          </Stack>
        </Slide>
        <IconButton
          onClick={handleNextPage}
          sx={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          disabled={
            currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
          }
        >
          <NavigateNextIcon />
        </IconButton>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {Array.from({
            length: Math.ceil(duplicateCards.length / cardsPerPage),
          }).map((_, index) => (
            <Button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              disableRipple
              disableElevation
              sx={{
                minWidth: 0,
                padding: 0,
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: currentPage === index ? "blue" : "gray",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Carousel;
