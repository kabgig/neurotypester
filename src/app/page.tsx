"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

// Force static generation at build time
export const dynamic = "force-static";

export default function Home() {
  const handleBookingClick = () => {
    window.open(
      "https://t.me/neurotypester_bot",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box bg="gray.50">
      {/* First Screen - Hero Section */}
      <Box minH="100vh" position="relative">
        <Container maxW="8xl" px={{ base: "4", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap="12"
            alignItems="start"
            minH="100vh"
            py={{ base: "8", lg: "0" }}
          >
            {/* Left Side - Text Content */}
            <GridItem>
              {/* Empty GridItem to maintain layout structure */}
            </GridItem>

            {/* Right Side - Image and CTA */}
            <GridItem>
              {/* Empty GridItem to maintain layout structure */}
            </GridItem>
          </Grid>
        </Container>

        {/* Title positioned absolutely at top left */}
        <Box
          position="absolute"
          top={{ base: "28px", lg: "5px" }}
          left={{ base: "4", md: "8" }}
          zIndex={10}
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "9xl" }}
            color="black"
            lineHeight="1.30"
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontStretch="extra-condensed"
          >
            NEUROTYPE <br />
            ANALYSIS
          </Heading>
        </Box>

        {/* Photo positioned absolutely at top right */}
        <Box
          position="absolute"
          top={{ base: "28px", lg: "42px" }}
          right={{ base: "20px", md: "40px" }}
          zIndex={10}
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            src="/ansar_headshot-cropped.jpg"
            alt="Ansar Neurotypester"
            width={460}
            height={550}
            style={{
              objectFit: "contain",
              objectPosition: "top center",
              width: "auto",
              height: "auto",
              maxWidth: "460px",
              maxHeight: "550px",
              margin: 0,
              padding: 0,
              display: "block",
              borderRadius: "12px",
            }}
            priority
          />
        </Box>

        {/* CTA Button above divider in right column */}
        <Box
          position="absolute"
          bottom="calc(15vh + 20px)"
          right={{ base: "20px", md: "40px" }}
        >
          <Button
            onClick={handleBookingClick}
            size="lg"
            height="60px"
            px="12"
            bg="black"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            borderRadius="0"
            _hover={{
              bg: "gray.800",
            }}
            _active={{
              bg: "gray.900",
            }}
          >
            BOOK 1-1 SESSION
          </Button>
        </Box>

        {/* Subtitle at bottom before divider */}
        <Box
          position="absolute"
          bottom="calc(15vh + 20px)"
          left={{ base: "4", md: "8" }}
          right="0"
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.700"
            fontWeight="400"
            maxW="500px"
          >
            Face decoding for optimized brain performance
          </Text>
        </Box>

        {/* Divider Line above bottom of first screen */}
        <Box
          position="absolute"
          bottom="15vh"
          left="0"
          right="0"
          height="1px"
          bg="gray.300"
        />
      </Box>

      {/* Second Screen - Empty Container for now */}
      <Box minH="100vh" bg="white">
        <Container maxW="8xl" px={{ base: "4", md: "8" }}>
          {/* Second screen content will go here */}
        </Container>
      </Box>
    </Box>
  );
}
