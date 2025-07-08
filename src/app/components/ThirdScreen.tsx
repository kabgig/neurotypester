"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";

export default function ThirdScreen() {
  const videoId = "OW7TH2U4hps"; // Extract video ID from the YouTube URL

  // Sample data for the video slots
  const videoSlots = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    title: `Customer Review ${index + 1}`,
    description:
      "Amazing experience with the neurotype analysis. Highly recommend!",
    videoId: videoId,
  }));

  return (
    <Box minH="100vh" bg="white" pt="10">
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
        CUSTOMER REVIEWS
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
          {videoSlots.map((video) => (
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
                  //noOfLines={2}
                >
                  {video.description}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
