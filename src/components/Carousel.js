import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Slide,
  Stack,
  Button,
  CardMedia,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Mock Card Component
const Card = ({ id }) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      zIndex: "-1",
    }}
  >
    {/* Card {id} */}
    <CardMedia
      component="img"
      alt="green iguana"
      height="auto"
      image="https://static1.dienanh.net/upload//2018/06/11/phin-alice-in-wonderland-alice-o-xu-so-than-tien-672e7d.jpg"
    />

    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
        color: "#fff", // White text for contrast
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0, // Ensure it's above the image
      }}
    ></Box>
  </Box>
);

function Carousel() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const cardsPerPage = 1;
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
            zIndex: 1,
            backgroundColor: "white",
            ml: 1,
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
            zIndex: 1,
            backgroundColor: "white",
            mr: 1,
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
                backgroundColor:
                  currentPage === index ? "secondary.dark" : "secondary.light",
                "&:hover": {
                  backgroundColor: "secondary.darker",
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
