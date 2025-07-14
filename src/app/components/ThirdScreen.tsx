"use client";

import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function ThirdScreen() {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Real customer review videos
  const videoSlots = [
    {
      id: 3,
      title: "Review by Silvestras Tamaševskis 🇺🇸",
      description: "",
      videoId: "BXekqNKZYLY",
    },
    {
      id: 4,
      title: "Review by Ilya 🇺🇸",
      description: "",
      videoId: "02YKT2nGjrQ",
    },
    {
      id: 1,
      title: "Review by Yaroslav Makarov 🇷🇺",
      description: "",
      videoId: "aKN0FmFAzBk",
    },
    {
      id: 2,
      title: "Review by Sergey Goryachkin 🇷🇺",
      description: "",
      videoId: "upzwTBDuHVE",
    },
    // Fill remaining slots with duplicates for now (you can replace with more real reviews later)

    // {
    //   id: 5,
    //   title: "Customer Review 5",
    //   description:
    //     "Amazing experience with the neurotype analysis. Highly recommend!",
    //   videoId: "aKN0FmFAzBk",
    // },
    // {
    //   id: 6,
    //   title: "Customer Review 6",
    //   description:
    //     "The insights were incredible and helped me understand myself better.",
    //   videoId: "upzwTBDuHVE",
    // },
    // {
    //   id: 7,
    //   title: "Customer Review 7",
    //   description:
    //     "Amazing experience with the neurotype analysis. Highly recommend!",
    //   videoId: "aKN0FmFAzBk",
    // },
    // {
    //   id: 8,
    //   title: "Customer Review 8",
    //   description:
    //     "The insights were incredible and helped me understand myself better.",
    //   videoId: "upzwTBDuHVE",
    // },
  ];

  // Show only 4 slots on mobile initially, all on desktop
  const displayedSlots =
    isMobile && !showAll ? videoSlots.slice(0, 4) : videoSlots;

  return (
    <Box minH="100vh" bg="gray.50" pt="10">
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        color="black"
        fontWeight="bold"
        lineHeight="1.1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontStretch="semi-condensed"
        transform="scaleY(1.185) scaleX(1.05)"
        transformOrigin="center"
        textAlign="center"
        mb="16"
      >
        REVIEWS
      </Heading>

      <Container maxW="8xl" px={{ base: "4", md: "8" }} pb="12vh">
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="6"
          alignItems="start"
        >
          {displayedSlots.map((video) => (
            <GridItem key={video.id}>
              <VStack
                align="stretch"
                //spacing="3"
                p="4"
                border="1px solid"
                borderColor="black"
                borderRadius="12px"
                bg="white"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                transition="all 0.2s ease-in-out"
              >
                {/* YouTube Video Embed */}
                <AspectRatio
                  ratio={16 / 9}
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                </AspectRatio>

                {/* Title */}
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="black"
                  fontWeight="bold"
                  lineHeight="1.2"
                  textAlign="center"
                >
                  {video.title}
                </Text>

                {/* Description */}
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color="gray.600"
                  lineHeight="1.4"
                  textAlign="center"
                >
                  {video.description}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>

        {/* Show More/Less Button - Only on mobile */}
        {isMobile && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="8"
            cursor="pointer"
            onClick={() => setShowAll(!showAll)}
            _hover={{
              bg: "gray.50",
            }}
            transition="background-color 0.2s"
            p="4"
            borderRadius="12px"
          >
            <VStack gap="2">
              <Box
                fontSize="24px"
                color="gray.600"
                animation="bounce 2s infinite"
              >
                {showAll ? <FiChevronUp /> : <FiChevronDown />}
              </Box>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                {showAll ? "Show Less" : "Show More"}
              </Text>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
